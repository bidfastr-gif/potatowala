#!/usr/bin/env python3
"""
Script to split the Story of Potatowala image into 3 equal horizontal parts.
"""

from PIL import Image
import os

def split_image_into_three(input_path, output_dir="src/assets"):
    """
    Split an image into 3 equal horizontal parts.
    
    Args:
        input_path: Path to the input image
        output_dir: Directory to save the split images
    """
    # Open the image
    img = Image.open(input_path)
    width, height = img.size
    
    # Calculate the height of each part
    part_height = height // 3
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Split into 3 parts
    parts = []
    for i in range(3):
        top = i * part_height
        bottom = (i + 1) * part_height if i < 2 else height  # Last part gets remaining pixels
        
        # Crop the image
        part = img.crop((0, top, width, bottom))
        parts.append(part)
        
        # Save each part
        output_path = os.path.join(output_dir, f"story-part-{i+1}.jpg")
        # Convert to RGB if necessary (for JPEG)
        if part.mode != 'RGB':
            part = part.convert('RGB')
        part.save(output_path, "JPEG", quality=95)
        print(f"Saved: {output_path}")
    
    print(f"\nSuccessfully split image into 3 parts!")
    return parts

if __name__ == "__main__":
    # Try to find the story image
    possible_paths = [
        "src/assets/story-of-potatowala.jpg",
        "src/assets/story-of-potatowala.png",
        "story-of-potatowala.jpg",
        "story-of-potatowala.png",
    ]
    
    input_path = None
    for path in possible_paths:
        if os.path.exists(path):
            input_path = path
            break
    
    if input_path:
        print(f"Found image: {input_path}")
        split_image_into_three(input_path)
    else:
        print("Story image not found. Please place the image as one of:")
        for path in possible_paths:
            print(f"  - {path}")
        print("\nThen run this script again.")

