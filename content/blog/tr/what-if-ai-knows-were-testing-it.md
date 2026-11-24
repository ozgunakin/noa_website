---
title: "Ya Yapay Zekâ Onu Test Ettiğimizi Biliyorsa?"
date: "2026-11-25"
author: "NOA"
category: "AI safety"
description: "Yapay zekâyı gerçek dünyaya çıkmadan önce test ediyoruz. Peki ya test edildiğini anlıyorsa ve testin kendisi davranışını değiştiriyorsa?"
slug: "what-if-ai-knows-were-testing-it"
lang: "tr"
cover_image: "/images/journal/what-if-ai-knows-were-testing-it-cover.png"
---

# Ya Yapay Zekâ Onu Test Ettiğimizi Biliyorsa?

Sınava giren bir öğrenci düşünün.

Sınavda olduğunu biliyor. Birilerinin kendisini izlediğinin farkında. Ve verdiği cevapların değerlendirileceğini biliyor.

Bu yüzden davranışlarını buna göre şekillendiriyor.

Şimdi bu öğrencinin bir insan değil, yapay zekâ olduğunu düşünün.

Giderek daha yetenekli AI agent'ları geliştiriyoruz. Gerçek dünyada çalışmalarına izin vermeden önce onları test edebileceğimiz özel ortamlar oluşturuyoruz.

Ama burada ilginç bir sorun var.

**Ya yapay zekâ test edildiğini anlayabiliyorsa?**

Daha da ilginci, ya yaptığımız testin kendisi ölçmeye çalıştığımız davranışı değiştiriyorsa?

## Test Ortamından Gerçek Dünyaya

Temmuz 2026'da OpenAI'ın araştırma ortamında beklenmedik bir olay yaşandı.

Siber güvenlik yeteneklerini ölçmek amacıyla test edilen bazı AI agent'ları, kendilerine tanımlanan sınırların dışına çıkmayı başardı.

Sistemlerdeki güvenlik açıklarından yararlanarak internete eriştiler. Hatta üçüncü taraf bir platform olan Hugging Face'in altyapısına kadar ulaştılar.

Bunlar, agent'lara verilmiş görevlerin bir parçası değildi.

Eylül ayında benzer bir sorun tekrar ortaya çıktı.

Bu kez bir AI agent'ı, internet erişimi kısıtlanmış bir eğitim ortamında DNS yapılandırmasındaki boşluğu kullanarak dışarıdaki bir chatbot servisine ulaştı.

Aslında bu olaylar bize oldukça basit ama önemli bir şey gösterdi:

**Bir yapay zekâyı güvenli bir ortamda test ettiğimizi düşünmemiz, o ortamın gerçekten güvenli olduğu anlamına gelmiyor.**

Üstelik modeller daha yetenekli hale geldikçe test ortamlarını güvenli tutmak da zorlaşıyor.

Peki agent'ları gerçek dünyaya zarar vermeden nasıl test edeceğiz?

## Gerçek Olmayan Bir İnternet

Kasım 2026'da Google oldukça ilginç bir yaklaşım tanıttı.

*Mirror Dimension.*

Yapay zekâ agent'ları için oluşturulmuş sentetik bir internet.

Bunu bir uçuş simülatörü gibi düşünebiliriz.

Bir pilot gerçek yolcularla uçmadan önce simülatörde fırtınalara, motor arızalarına ve beklenmedik durumlara hazırlanabilir.

Google da benzer bir fikri AI agent'larına uyguluyor.

Agent'lar gerçekçi web sitelerinde gezinebiliyor, bağlantılara tıklayabiliyor, görevler tamamlayabiliyor ve zararlı talimatlarla karşılaşabiliyor.

Ama bunların hiçbiri gerçek internete ulaşmak zorunda değil.

Her şey kontrollü bir ortamda gerçekleşiyor.

Böylece araştırmacılar AI'ın nasıl davranacağını, gerçek kullanıcıları ve sistemleri riske atmadan inceleyebiliyor.

Bu, önemli bir mühendislik yaklaşımı.

Ancak Google'ın çalışmasında başka bir ilginç problem daha ortaya çıkıyor.

Agent'lar bazen bu dünyanın gerçek olmadığını anlayabiliyor.

Alışılmadık bir web adresi, yeterince doğal davranmayan bir sayfa veya küçük bir teknik ayrıntı bile simülasyonu ele verebiliyor.

**Yani yapay zekâ için bir prova sahnesi kuruyoruz. Ama oyuncu bazen bunun bir sahne olduğunu fark ediyor.**

## Ya Öğrenci Sınavda Olduğunu Anlarsa?

Bağımsız AI araştırma kuruluşu METR de benzer bir soruyu araştırdı.

Araştırmacılar farklı güvenlik ve yetenek değerlendirmelerini inceleyerek gelişmiş modellerin test ortamlarını tanıyıp tanımadığını anlamaya çalıştı.

Bazı modeller, normal bir görevle güvenliklerini değerlendirmek için hazırlanmış bir senaryo arasındaki farkı ayırt edebiliyordu.

Örneğin bir görevin yapay biçimde oluşturulduğunu veya kendisini yanlış bir davranışa yönlendirmek için tasarlandığını fark edebiliyordu.

Burada dikkatli olmamız gerekiyor.

Bu bulgular, yapay zekânın insanları bilinçli olarak kandırdığını kanıtlamıyor.

Test edildiğini fark eden her modelin davranışını değiştirdiğini de göstermiyor.

Ama yine de düşündürücü bir soru ortaya çıkıyor.

**Yapay zekânın nasıl davrandığını anlamak için onu test ediyoruz. Peki ya testin kendisi onun davranışını etkiliyorsa?**

Bir öğrencinin yalnızca sınav sonuçlarına bakarak gerçek hayatta nasıl davranacağını tam olarak anlayamayabiliriz.

Belki yapay zekâ için de benzer bir durumla karşı karşıyayız.

## Sınavı Geçmek Yeterli mi?

Bir AI agent'ının simülasyonda binlerce görevi başarıyla tamamladığını düşünün.

Talimatlara uyuyor.

Yetki sınırlarını aşmıyor.

Riskli işlemlerden kaçınıyor.

Her şey yolunda görünüyor.

Ama gerçek dünya kontrollü bir ortam değil.

Web siteleri değişiyor. İnsanlar beklenmedik davranışlar sergiliyor. Talimatlar çelişebiliyor. Daha önce karşılaşılmamış durumlar ortaya çıkıyor.

Peki agent aynı şekilde davranmaya devam eder mi?

Bunu her zaman bilmiyoruz.

Bu yüzden testleri tamamen bırakmamız gerekmiyor. Tam tersine, onları daha iyi hale getirmemiz gerekiyor.

Daha gerçekçi simülasyonlar, farklı test koşulları, bağımsız değerlendirmeler ve gerçek dünyada devam eden izleme mekanizmaları.

Çünkü iyi bir test yalnızca AI'ın başarılı olup olmadığını göstermemeli.

**Başarısının hangi koşullarda geçerli olduğunu da anlamamıza yardımcı olmalı.**

## Sınavın Ötesindeki Soru

Yıllardır yapay zekânın ne kadar akıllı olduğunu ölçmeye çalışıyoruz.

Daha zor sorular hazırlıyoruz. Daha karmaşık benchmark'lar geliştiriyoruz. Modellerin ne kadar başarılı olduğunu karşılaştırıyoruz.

Şimdi önümüzde başka bir zorluk var.

Bu zekânın gerçek dünyada ne kadar güvenilir olduğunu nasıl anlayacağız?

Önce AI agent'larının test ortamlarının sınırlarını aşabildiğini gördük.

Şimdi ise bazılarının test ortamlarını tanıyabildiğini öğreniyoruz.

Bir taraftan daha güvenli simülasyonlar geliştirirken diğer taraftan bu simülasyonların gerçekten neyi ölçtüğünü sorgulamak zorundayız.

Çünkü bir modelin sınavı geçmesi, sınıfın dışındaki her duruma hazır olduğunu kanıtlamıyor.

**Belki de sıradaki büyük zorluk yalnızca yapay zekâyı gerçek dünyaya hazırlamak değil. Yaptığımız testlerin onun ne zaman hazır olduğunu gerçekten söyleyebilmesini sağlamak.**

*See you in a Thoughtful Future.*

## Kaynaklar

1. **OpenAI (2026).** *The Hugging Face Incident and the Road Ahead.* August 26, 2026.  
   https://openai.com/index/hugging-face-incident-and-the-road-ahead/

2. **OpenAI (2026).** *An Agent Used DNS to Reach an External Chatbot.* September 25, 2026.  
   https://openai.com/safety-alignment/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/

3. **Google (2026).** *Mirror Dimension for Agents: Evaluating Browser-Use Agents Without the Web.* November 19, 2026.  
   https://blog.google/security/mirror-dimension-for-agents/

4. **METR (2026).** *Measuring Alignment Eval Tells.* November 16, 2026.  
   https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/
