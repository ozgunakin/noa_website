---
title: "Yapay Zekâ Ajanlarının Güvenliği, Model Güvenliğinden İbaret Değil"
date: "2026-09-12"
author: "NOA"
category: "AI safety"
description: "Güvenli bir model yeterli değil. Şirketlerin, bir yapay zekâ ajanının neler yapabileceğini ve insanların onun yüzünden neye inanabileceğini de kontrol etmesi gerekiyor."
slug: "ai-agent-safety-is-more-than-model-safety"
lang: "tr"
cover_image: "/images/journal/ai-agent-safety-system-cover.webp"
---

# Yapay Zekâ Ajanlarının Güvenliği, Model Güvenliğinden İbaret Değil

Yapay zekâ ajanları gerçek şirketlerin içinde çalışmaya başlıyor.

Kod yazıyorlar, şirket içi dokümanlarda arama yapıyorlar, çalışanların sorularını cevaplıyorlar ve şirket sistemlerine bağlanıyorlar.

Bu da farklı türde bir güvenlik sorunu yaratıyor.

**Bir yapay zekâ ajanı iki şekilde zarar verebilir: yanlış bir şey yaparak ya da bir insanın yanlış bir şeye inanmasına yol açarak.**

![Yapay zekâ ajanı güvenliğinin iki katmanı: eylemler ve bilgi.](/images/journal/ai-agent-safety-two-layers.svg)

İlk sorun **eylemlerle** ilgili.

Spotify, kodlama ajanlarının kontrollü yetkilerle ve izole ortamlarda çalıştığı ajan tabanlı geliştirme ortamlarını anlattı. Fikir, geleneksel güvenlikten tanıdık: yazılıma ihtiyacından fazla erişim verme.

Uber da kimlik ve Zero Trust fikirlerini yapay zekâ ajanlarına genişletmeyi ele aldı. Bir ajanın bir kimliği, net yetkileri ve hassas işlemler etrafında ek kontrolleri olmalı.

İlke basit: **Ajandan her güvenlik kuralını kendi başına uygulamasını bekleme. Kuralları onun etrafına kur.**

Ama eylemler sorunun sadece yarısı.

Bir ajan canlı ortamdan tamamen izole olabilir ve yine de kendinden emin ama yanlış bir cevap verebilir. Bir çalışan bu cevaba dayanarak gerçek bir karar verirse, zarar artık teknik değildir. Bilgiyle ilgilidir.

Airbnb'nin yapay zekâ destekli müşteri desteği çalışması, cevapları sınırlı sayıda güvenilir yardım ve hesap bilgisine dayandırmanın değerini gösteriyor. Gerektiğinde konu bir insana aktarılıyor.

Morgan Stanley de çalışanlara yönelik bilgi asistanlarında benzer bir yaklaşım benimsedi: cevaplar onaylı şirket içi içeriğe dayanıyor, kullanıcılar orijinal kaynağa ulaşabiliyor ve yeni kullanım alanları daha geniş çapta devreye alınmadan önce değerlendiriliyor.

Bu da bize ikinci bir ilke veriyor: **Güvenli bir ajan sadece neyi yapmaya yetkili olduğunu bilmemeli. Neyi iddia etmeye yetkili olduğunu da bilmeli.**

Güvenilir kaynaklar önemli. Bilgiyi kullanıcının erişim yetkisine göre getirmek önemli. Kaynak göstermek önemli. Ve bazen en güvenli cevap basitçe şudur: **"Bilmiyorum."**

Bu bir zayıflık değil. Bir güvenlik özelliği.

Yapay zekâ ajanları gündelik işin bir parçası hâline geldikçe model güvenliği önemini korumaya devam edecek. Ama model sadece bir katman.

**En güvenli ajan, en güvenli modele sahip olan olmayabilir. En güvenli sistemin içindeki ajan olabilir.**

*See you in a Thoughtful Future.*

## Kaynaklar

1. Spotify Engineering. https://engineering.atspotify.com/
2. Uber Engineering. https://www.uber.com/blog/engineering/
3. Airbnb Tech. https://medium.com/airbnb-engineering
4. Morgan Stanley. https://www.morganstanley.com/
5. OpenAI Codex. https://openai.com/codex/


<!-- IMPLEMENTATION NOTES
Cover: /images/journal/ai-agent-safety-system-cover.webp — Journal card + article hero.
Inline: /images/journal/ai-agent-safety-two-layers.svg — keep at the exact position used above.
Suggested SVG destination: public/images/journal/
Suggested Markdown destination: content/blog/
-->
