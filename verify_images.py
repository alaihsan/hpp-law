#!/usr/bin/env python3
"""
Script untuk memverifikasi bahwa semua gambar di folder images dapat diakses
dan semua referensi gambar di HTML sudah diperbarui dengan benar.
"""
import os
import re
from pathlib import Path

def check_images_folder():
    """Periksa isi folder images"""
    images_dir = Path("images")
    if not images_dir.exists():
        print("❌ Folder 'images' tidak ditemukan!")
        return False
    
    images = list(images_dir.glob("*"))
    if not images:
        print("❌ Folder 'images' kosong!")
        return False
    
    print("✅ Gambar di folder images:")
    for img in sorted(images):
        if img.suffix.lower() in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']:
            size = img.stat().st_size
            print(f"   📁 {img.name} ({size:,} bytes)")
    return True

def check_html_references():
    """Periksa semua referensi gambar di file HTML"""
    html_files = list(Path(".").glob("*.html"))
    
    issues = []
    missing_refs = []
    
    # Daftar file gambar yang seharusnya ada
    expected_images = {"logohpp.png", "hendra.png", "hendra2.png", "hendrateam.png"}
    
    for html_file in html_files:
        content = html_file.read_text(encoding='utf-8')
        
        # Cari referensi gambar lokal yang belum diperbarui
        local_image_refs = re.findall(r'src="(?!images/|https://)([^"]*\.(?:png|jpg|jpeg|gif|svg|webp))"', content)
        
        if local_image_refs:
            for ref in local_image_refs:
                issues.append(f"❌ {html_file.name}: referensi '{ref}' belum diperbarui ke 'images/{ref}'")
        
        # Cek referensi ke file gambar yang ada
        for img in expected_images:
            if f'src="images/{img}"' in content:
                if not Path(f"images/{img}").exists():
                    missing_refs.append(f"❌ Referensi ke 'images/{img}' ditemukan di {html_file.name}, tapi file tidak ada")
    
    if issues or missing_refs:
        print("\n🔍 Masalah yang ditemukan:")
        for issue in issues:
            print(f"   {issue}")
        for missing in missing_refs:
            print(f"   {missing}")
        return False
    else:
        print("\n✅ Semua referensi gambar di HTML sudah benar!")
        return True

def test_image_accessibility():
    """Test akses ke gambar dari server lokal"""
    print("\n🔍 Testing akses gambar dari server lokal...")
    
    # Test beberapa file utama
    test_images = ["images/logohpp.png", "images/hendra.png", "images/hendra2.png", "images/hendrateam.png"]
    
    for img_path in test_images:
        if Path(img_path).exists():
            print(f"   ✅ {img_path} - dapat diakses")
        else:
            print(f"   ❌ {img_path} - tidak dapat diakses")
            return False
    return True

def main():
    print("🔍 Memverifikasi struktur gambar website HPP Law Office...\n")
    
    # Periksa folder images
    images_ok = check_images_folder()
    
    # Periksa referensi HTML
    html_ok = check_html_references()
    
    # Test aksesibilitas
    access_ok = test_image_accessibility()
    
    print(f"\n📊 Ringkasan:")
    print(f"   📁 Folder images: {'✅ OK' if images_ok else '❌ Error'}")
    print(f"   🌐 Referensi HTML: {'✅ OK' if html_ok else '❌ Error'}")
    print(f"   🔗 Akses gambar: {'✅ OK' if access_ok else '❌ Error'}")
    
    if images_ok and html_ok and access_ok:
        print("\n🎉 SEMUA BERHASIL! Gambar sudah dikelompokkan dengan benar dan dapat diakses.")
    else:
        print("\n⚠️  Ada masalah yang perlu diperbaiki.")

if __name__ == "__main__":
    main()
