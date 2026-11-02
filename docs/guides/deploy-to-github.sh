#!/bin/bash

# Script untuk push kode ke GitHub
# Cara pakai: ./deploy-to-github.sh

echo "=========================================="
echo "  Deploy Sunshine Studio ke GitHub"
echo "=========================================="
echo ""

# Cek apakah sudah ada remote origin
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' sudah ada!"
    read -p "Apakah Anda ingin menggantinya? (y/n): " replace
    if [ "$replace" = "y" ] || [ "$replace" = "Y" ]; then
        git remote remove origin
        echo "✅ Remote origin dihapus"
    else
        echo "❌ Dibatalkan. Gunakan 'git remote set-url origin [URL]' untuk mengubah URL"
        exit 1
    fi
fi

# Minta input URL repository
echo ""
echo "Masukkan URL repository GitHub Anda:"
echo "Contoh: https://github.com/username/repo-name.git"
read -p "URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ URL tidak boleh kosong!"
    exit 1
fi

echo ""
echo "📦 Menghubungkan ke GitHub..."
git remote add origin "$repo_url"

echo "🔀 Mengatur branch ke 'main'..."
git branch -M main

echo "🚀 Push kode ke GitHub..."
echo ""
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "✅ Berhasil! Kode sudah di-push ke GitHub"
    echo "=========================================="
    echo ""
    echo "Langkah selanjutnya:"
    echo "1. Buka https://vercel.com atau https://netlify.com"
    echo "2. Import repository dari GitHub"
    echo "3. Deploy!"
else
    echo ""
    echo "❌ Gagal push ke GitHub"
    echo "Periksa:"
    echo "- Apakah URL repository benar?"
    echo "- Apakah Anda sudah login ke GitHub?"
    echo "- Apakah repository sudah dibuat di GitHub?"
fi


