/**
 * Blog yazıları ve metadata için tip tanımlamaları
 * 
 * Post: Blog yazısının tüm detaylarını içeren ana tip
 * BlogMetadata: Blog yazısının üst bilgilerini içeren tip
 * 
 * @author [Ahmet Erdem Yeniay]
 * @version 1.0.0
 */

export interface Post {
  id: string;        // Yazının benzersiz kimliği
  title: string;     // Yazının başlığı
  description: string; // Yazının kısa açıklaması
  date: string;      // Yazının tarihi (YYYY-MM-DD formatında)
  content: string;   // Yazının içeriği (Markdown formatında)
  slug: string;      // URL'de kullanılacak SEO dostu isim
  tags: string[];    // Yazıyla ilgili etiketler
}

export interface BlogMetadata {
  title: string;     // Yazının başlığı
  description: string; // Yazının kısa açıklaması
  date: string;      // Yazının tarihi
  tags: string[];    // Yazıyla ilgili etiketler
} 