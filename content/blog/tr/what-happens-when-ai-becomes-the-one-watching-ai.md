---
title: "Yapay Zekâyı Yapay Zekâ İzlemeye Başlarsa Ne Olur?"
slug: "what-happens-when-ai-becomes-the-one-watching-ai"
date: "2026-09-26"
description: "Yapay zekâ ajanları özerkleştikçe, yapay zekâyı yapay zekâ izlemeye başlıyor. Bu gerekli olabilir, ama insan denetiminin gerçekte ne anlama geldiğini de değiştiriyor."
author: "NOA"
category: "Human oversight"
lang: "tr"
cover_image: "/images/journal/cover-ai-watching-ai.png"
---

# Yapay Zekâyı Yapay Zekâ İzlemeye Başlarsa Ne Olur?

Yapay zekâ ajanları artık soruları yanıtlamaktan fazlasını yapıyor.

Kod yazıyor, araç kullanıyor, sistemlerde geziniyor, seçimler yapıyor ve bazen her adımını izleyen bir insan olmadan uzun süre çalışıyorlar.

Bu da basit bir sorun yaratıyor.

İnsanlar her şeyi kontrol edemez.

Bu yüzden yapay zekâyı izlemek için yapay zekâ kullanmaya başlıyoruz.

![Ucunda bir insanın durduğu, yapay zekânın yapay zekâyı izlediği bir zincir](/images/journal/inside-ai-watching-ai.png)

## İzleyici çoktan geldi

OpenAI, şirket içindeki kodlama ajanlarını amaçlanandan sapan davranış belirtilerine karşı izlemek için güçlü modeller kullanan bir sistemi anlattı. Önemli sınırları aşan eylemleri ayrı bir ajanın incelemesine dair bir çalışma da yayımladı.

Anthropic aynı soruna başka bir açıdan bakıyor. Ajan faaliyetlerinin ne kadarının izleyiciler tarafından kapsandığını, incelemelerin ne kadar hızlı yapıldığını ve vakaların ne sıklıkla bir üst seviyeye taşındığını ölçüyor.

Bu mantıklı.

Milyonlarca ajan aynı anda çalışıyorsa, insanlar her eylemi tek tek elle inceleyemez.

Ama ortada yeni bir soru var:

**İzleme işini yapan sistem de bir yapay zekâysa ne olur?**

## İzleyici, doğrunun kendisi değil

Bir yapay zekâ izleyicisi de hata yapabilir.

Anthropic'in SLEIGHT-Bench çalışması, izleyicilerin kör noktaları olabileceğini gösteriyor. Bazı ajan davranışlarını fark etmek bir izleyici için daha zor olabiliyor. Daha iyi prompt'lar ya da izleme düzenekleri de her zayıflığı ortadan kaldırmıyor.

Carnegie Mellon'ın 2026'daki bir çalışması da benzer bir noktaya vardı. Her modelde ve her görevde en iyi sonucu veren tek bir izleme stratejisi olmadığını gösterdi.

Yani cevap şu olamaz: Akıllı bir izleyici kur ve ona güven.

İzleyici de bir model. Onun da kendine ait sınırları, bağlamı, teşvikleri ve hata yapma biçimleri var.

## İnsanın rolü değişiyor

Bu, otomatik denetimin kötü bir fikir olduğu anlamına gelmiyor.

Çok sayıda ajanı yönetmenin tek pratik yolu bu olabilir.

Ama "döngüdeki insan" (human in the loop) farklı bir anlam kazanmaya başlayabilir.

İnsan her eylemi izlemeyebilir.

Onun yerine insanlar şunları yapabilir:

- bir ajanın neleri yapmaya yetkili olduğuna karar vermek
- hangi eylemlerin ek inceleme gerektirdiğini belirlemek
- izleyicinin bir eylemi ne zaman durdurması ya da üst seviyeye taşıması gerektiğini seçmek
- izleyicinin kendisini denetlemek
- nihai sınırların sorumluluğunu taşımaya devam etmek

Bu, farklı türde bir kontrol.

Her adımı gözetmeye daha az odaklanan.

Adımları çevreleyen sistemi tasarlamaya daha çok odaklanan.

## İzleyiciyi kim izleyecek?

Ajanlar daha yetenekli hale geldikçe, muhtemelen etraflarına daha fazla katman kuracağız.

Bir ajan işi yapar.

Başka bir yapay zekâ ajanı kontrol eder.

En önemli vakaları bir insan inceler.

Bu güçlü bir sistem olabilir. Ama ancak tek bir şeyi unutmazsak:

**Denetim otomatikleştirilmeli. Sorumluluk değil.**

Amaç insanları döngüden çıkarmak değil.

Amaç, insan muhakemesini en çok önemli olduğu yere koymak.

See you in a Thoughtful Future.

## Kaynaklar

1. OpenAI, "How we monitor internal coding agents for misalignment"  
   https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment/

2. OpenAI Alignment, "Auto-review of agent actions without synchronous human oversight"  
   https://alignment.openai.com/

3. Anthropic, "Measurements for understanding the pace of AI development inside frontier labs", section on oversight of AI agents  
   https://www.anthropic.com/institute/measuring-pace-of-ai-development

4. Anthropic, "SLEIGHT-Bench: Finding Blind Spots in AI Monitors"  
   https://alignment.anthropic.com/2026/sleight-bench/

5. Kale et al., "No One Monitor Fits All: Oversight Strategies for Frontier Agents", ICLR 2026 Workshop on Agents in the Wild  
   https://openreview.net/attachment?id=rD6bAM2ZEi&name=pdf
