---
title: "Yapay Zekâ Verimliliğini Yanlış Ölçüyoruz"
date: "2026-10-25"
author: "NOA"
category: "Work & AI"
description: "Yapay zekâ daha fazla üretmemizi sağlıyor. Ama bu, daha fazla iş bitirmekle aynı şey değil."
slug: "we-are-measuring-ai-productivity-wrong"
lang: "tr"
cover_image: "/images/journal/measuring-ai-productivity-cover.png"
---

# Yapay Zekâ Verimliliğini Yanlış Ölçüyoruz

"Yapay zekâ bizi daha verimli yaptı."

Artık neredeyse her ekip bunu söylüyor. Ama bunu *nereden* bildiklerini sorun. Cevap genelde şöyle: daha fazla kod, daha fazla pull request, daha fazla kapanan ticket, insanlar kendini daha hızlı hissediyor.

**Bunların hiçbiri daha fazla faydalı iş yapıldığını kanıtlamıyor.**

## Daha fazla kod, daha fazla yazılım demek değil

Bu yaz Microsoft, yapay zekâ kodlama ajanlarını kendi içinde yaygınlaştırmasını inceledi. Ajanları benimseyen mühendisler yaklaşık **%24 daha fazla pull request** merge etti. Ama çalışmanın yazarları bile, merge edilmiş bir pull request'in teslim edilmiş değerle aynı şey olmadığını belirtiyor.

Bu ay Harvard'dan bir çalışma makalesi **718 şirketi** inceledi ve tam olarak bu soruyu sordu.

Ekipler yapay zekâ kodlama ajanlarını benimsedikten sonra yaklaşık **%30 daha fazla kod** yazdı.

Ama kayda değer ölçüde daha fazla iş bitirmediler.

Onun yerine kodun etrafındaki her şey büyüdü: İncelemeler **%49 daha uzun** sürdü ve yeniden ele alınmak üzere geri gönderilen değişikliklerin oranı neredeyse iki katına çıktı.

## Hızlı hissetmek, hızlı olmak değil

DX'in 120.000'den fazla geliştiriciyi kapsayan araştırması, artık neredeyse herkesin yapay zekâ kullandığını, ama verimlilik artışının **%10** civarında takılıp kaldığını gösteriyor.

Glean'in 6.000 çalışanla yaptığı 2026 anketi, gerisinin nereye gittiğini gösteriyor. Çalışanların **%75'i** yapay zekânın onları daha verimli yaptığını söylüyor. **%77'si** ise son bir ay içinde yapay zekânın yaptığı bir işi düzeltmek ya da baştan yapmak zorunda kalmış.

Çalışanlar, yapay zekânın onlara haftada yaklaşık **11 saat** kazandırdığını, çıktılarını kontrol edip düzeltmeye de yaklaşık **6,4 saat** harcadıklarını söylüyor. Rapor buna **"botsitting"**, yani bot bakıcılığı diyor.

![Ajanlar hızla çıktı üretirken bir kişi saatlerce bu çıktıyı kontrol edip düzeltiyor.](/images/journal/botsitting.png)

Bu ikinci sayıyı neredeyse kimse ölçmüyor.

## Darboğaz yer değiştirdi

Yazmak ucuzladı. İncelemek, doğrulamak ve karar vermek ucuzlamadı.

Yani dashboard'unuz satırları, commit'leri ya da pull request'leri sayıyorsa, işin ucuz kısmını sayıyor. Üstelik o kısım artık sonsuza kadar şişirilebilir.

## Kendi sayılarımız bize ne öğretti?

[76 milyon satırı yapay zekâ ajanlarıyla taşıdığımızda](/tr/blog/seventy-six-million-rows-later/), faaliyet sayıları mucize gibi görünüyordu: on dört dakikada otuz repo, tek oturumda 1.500 komut.

Bunların hiçbiri bize işin doğru yapılıp yapılmadığını söylemedi.

Önemli olan **sıfır başarısız tablo**, birbirini tutan satır sayıları ve ekipten birinin "dur" dediği kırk kadar andı.

**Çıktı sayıları ajanları ölçtü. Sonuç sayıları ise ekibi.**

## Onun yerine ne ölçmeli?

- **Bitmiş sonuçlar,** faaliyet değil.
- **Güvenilir bir sonuca ulaşma süresi,** ilk taslağa ulaşma süresi değil.
- **Yeniden iş:** Yapay zekânın yaptığı işin ne sıklıkla düzeltilmesi ya da baştan yapılması gerektiği.
- **İnceleme yükü:** Kontrole ne kadar insan zamanı gittiği.
- **Sonuç başına maliyet,** insanların zamanı da dahil.

Çıktı üretmek neredeyse bedavaya geldiğinde, **çıktı da size neredeyse hiçbir şey söylemez.**

Yani soru "Yapay zekâ bizi daha verimli yapıyor mu?" değil.

Soru şu: **Daha önce bitiremediğimiz neyi bitirdik ve bu gerçekte ne kadar insan zamanı aldı?**

*See you in a Thoughtful Future.*

### Kaynaklar

Chen, F. & Stratton, J. (2026). *Artificial Intelligence in the Firm: Bottlenecks in Software Production.* Harvard working paper. Coverage:  
https://fourweekmba.com/ai-coding-agents-add-30-more-code-not-more-finished-work/

Murphy-Hill, E., Butler, J. & Savelieva, A. (2026). *Adoption and Impact of Command-Line AI Coding Agents: A Study of Microsoft's Early 2026 Rollout of Claude Code and GitHub Copilot CLI.*  
https://arxiv.org/abs/2607.01418

DX (2026). *Measuring Developer Productivity & AI Impact.* Coverage:  
https://shiftmag.dev/this-cto-says-93-of-developers-use-ai-but-productivity-is-still-10-8013/

Glean Work AI Institute (2026). *Work AI Index 2026.*  
https://www.glean.com/work-ai-institute/reports/work-ai-index
