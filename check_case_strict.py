import os
import re

def get_actual_files(directory):
    files = {}
    for root, _, filenames in os.walk(directory):
        for f in filenames:
            rel_path = os.path.relpath(os.path.join(root, f), directory)
            key = rel_path.replace("\\", "/")
            files[key.lower()] = key
    return files

def check_imports(src_dir):
    actual_files = get_actual_files(src_dir)
    # Add index files to actual_files since importing a directory imports its index
    for f in list(actual_files.keys()):
        if f.endswith('/index.ts') or f.endswith('/index.tsx') or f.endswith('/index.js') or f.endswith('/index.jsx'):
            dir_path = f.rsplit('/', 1)[0]
            actual_files[dir_path] = actual_files[f].rsplit('/', 1)[0]

    # regex to find imports and exports from local files
    import_re = re.compile(r'(?:import|export)\s+.*?from\s+["\']([^"\']+)["\']')
    # regex for dynamic imports
    dynamic_import_re = re.compile(r'import\s*\(\s*["\']([^"\']+)["\']\s*\)')

    errors = []
    
    for root, _, filenames in os.walk(src_dir):
        for f in filenames:
            if f.endswith(('.tsx', '.ts', '.js', '.jsx')):
                filepath = os.path.join(root, f)
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                    matches = import_re.findall(content) + dynamic_import_re.findall(content)
                    
                    for match in matches:
                        if match.startswith('.'):
                            # Resolve relative path
                            resolved_path = os.path.normpath(os.path.join(root, match)).replace('\\', '/')
                            # Get path relative to src_dir
                            rel_match = os.path.relpath(resolved_path, src_dir).replace('\\', '/')
                        elif match.startswith('@/'):
                            rel_match = match[2:]
                        else:
                            continue # Not a local import
                            
                        # Remove query params like ?t=123 if any
                        rel_match = rel_match.split('?')[0]

                        # Check with and without extensions
                        found = False
                        extensions = ['', '.ts', '.tsx', '.js', '.jsx', '.json', '.jpg', '.png', '.svg', '.css']
                        
                        for ext in extensions:
                            test_path_lower = (rel_match + ext).lower()
                            if test_path_lower in actual_files:
                                found = True
                                actual_path = actual_files[test_path_lower]
                                expected_path = rel_match + ext
                                
                                # Check case sensitivity
                                # Wait, rel_match doesn't have the extension, actual_path does.
                                # Let's just compare the directory parts and the base name without extension
                                actual_no_ext = os.path.splitext(actual_path)[0]
                                if actual_no_ext != rel_match and not actual_path.endswith('index' + ext):
                                    if ext != '' and rel_match != actual_no_ext:
                                        errors.append(f"CASE MISMATCH: {filepath} -> {match} (Actual: {actual_path})")
                                break
                                
                        if not found:
                            errors.append(f"MISSING: {filepath} -> {match}")

    return errors

if __name__ == "__main__":
    src_path = "src"
    print(f"Checking imports in {src_path}...")
    results = check_imports(src_path)
    
    if not results:
        print("No import errors found.")
    else:
        for err in results:
            print(err)
