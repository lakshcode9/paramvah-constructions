
import os
from PIL import Image

def resize_image(input_path, output_path, size):
    try:
        with Image.open(input_path) as img:
            # Calculate aspect ratio
            img.thumbnail(size, Image.Resampling.LANCZOS)
            img.save(output_path, "PNG")
            print(f"Resized {input_path} to {size}")
    except Exception as e:
        print(f"Error resizing {input_path}: {e}")

# Paths to the uploaded images (from metadata)
input_0 = r"C:\Users\laksh\.gemini\antigravity\brain\d3e323fe-22e5-4eec-bd74-f95264569b5e\uploaded_image_0_1768892503871.png"
input_1 = r"C:\Users\laksh\.gemini\antigravity\brain\d3e323fe-22e5-4eec-bd74-f95264569b5e\uploaded_image_1_1768892503871.png"

# Output paths in public folder
output_default = r"c:\Users\laksh\Desktop\Dev\Work\paramvah-constructions\public\cursor-default.png"
output_pointer = r"c:\Users\laksh\Desktop\Dev\Work\paramvah-constructions\public\cursor-pointer.png"

# Resize to 32x32 (standard cursor size)
# User wants "reasonable size", 32 is standard. 48 or 64 is "Large". 
# Given the user complained about "1/4 screen", 32-48 is safe. Let's go with 40x40 to be high-res but small.
target_size = (48, 48)

resize_image(input_0, output_default, target_size)
resize_image(input_1, output_pointer, target_size)
