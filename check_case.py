import os
import re

def get_actual_files(directory):
    files = {}
    for root, _, filenames in os.walk(directory):
        for f in filenames:
            rel_path = os.path.relpath(os.path.join(root, f), directory)
            # Use forward slashes for consistency
            key = rel_path.replace("\\", "/")
            files[key.lower()] = key
    return files

def check_imports(src_dir, assets_dir):
    actual_assets = get_actual_files(assets_dir)
    # Regex to find imports from @/assets/
    import_re = re.compile(r'["\']@/assets/([^"\']+)["\']')
    
    errors = []
    
    for root, _, filenames in os.walk(src_dir):
        for f in filenames:
            if f.endswith(('.tsx', '.ts', '.js', '.jsx')):
                filepath = os.path.join(root, f)
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                    matches = import_re.findall(content)
                    for match in matches:
                        match_lower = match.lower()
                        if match_lower not in actual_assets:
                            errors.append(f"MISSING: {f} -> @/assets/{match} (File not found)")
                        elif match != actual_assets[match_lower]:
                            errors.append(f"CASE MISMATCH: {f} -> @/assets/{match} (Actual: @/assets/{actual_assets[match_lower]})")
    
    return errors

if __name__ == "__main__":
    src_path = "src"
    assets_path = os.path.join("src", "assets")
    
    print(f"Checking imports in {src_path} against assets in {assets_path}...")
    results = check_imports(src_path, assets_path)
    
    if not results:
        print("No import errors found.")
    else:
        for err in results:
            print(err)
