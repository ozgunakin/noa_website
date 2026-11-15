---
title: "Yetmiş Altı Milyon Satır Sonra: Yapay Zekâ Ajanlarıyla Çalışmak Bize Ne Öğretti?"
date: "2026-10-19"
author: "NOA"
category: "Work & AI"
description: "Yapay zekâ kodlama ajanlarıyla gerçek ekip çalışması: neler hızlandı, neler ters gitti, neden en önemlisi uzman ekipti ve araştırmalar ne söylüyor."
slug: "seventy-six-million-rows-later"
lang: "tr"
cover_image: "/images/journal/seventy-six-million-rows-cover.png"
---

# Yetmiş Altı Milyon Satır Sonra: Yapay Zekâ Ajanlarıyla Çalışmak Bize Ne Öğretti?

Geçenlerde yapay zekâ kodlama ajanlarıyla yaptığım altmış çalışma oturumunu baştan gözden geçirdim.

Kısa sorular değil. Deneme amaçlı işler de değil. Her biri gerçek bir işti ve hiçbiri tek kişilik bir proje değildi.

Ekibimle birlikte büyük bir grup veri pipeline'ını yeni bir veritabanına taşıdık. Canlı ortamdaki bir veritabanını yükselttik. Tek günde bir müşteri destek merkezi kurduk. Paywall'lu bir ürünü bir akşamda yayına aldık.

Bu işteki rolüm belliydi. Sistemlerimizin geneline geniş erişimim var ve bu sistemlerin birbirine nasıl bağlandığını iyi biliyorum. Böylece ekibin tasarladığını alıp ajanlara yönlendirebiliyor ve canlıya daha hızlı geçmesine yardım edebiliyordum. İşin arkasındaki uzmanlık ekibindi.

Ölçeği hakkında bir fikir vermek için, yalnızca veritabanı taşıma işi şunları kapsıyordu:

- **50'den fazla canlı pipeline**, yaklaşık **87.000 satır** Python ve SQL; hem eski hem yeni veritabanına yazacak şekilde değiştirildi.
- Dört saatten biraz uzun süren tek bir çalıştırmada kopyalanan yaklaşık **2.500 tablo**: 36.870 dosya, başarısız olan sıfır tablo.
- Geçişten sonraki ilk 48 saatte, 1.400'ü aşkın pipeline çalıştırmasıyla yeni veritabanına yazılan yaklaşık **76 milyon satır**; hiç hata yok.
- 778 tabloda **194 milyon değere** dokunan bir veri temizliği ve eski veritabanına karşı kontrol edilen 1.200'den fazla sorgu; sıfır hata.

Bunun arkasındaki en uzun oturumda 1.500'den fazla komut çalıştı.

Bu oturumlar boyunca, şu ya da bu şekilde yaklaşık kırk kez **"dur"** yazdım. Ajanlardan yaklaşık sekiz kez bir şeyi **geri almalarını** istedim.

İki sayı da önemli. Bence ikisi birlikte, ajanlar hakkında okuduklarımızın çoğundan daha fazlasını anlatıyor.

## Birbirini tutmayan iki hikâye

Teknoloji medyası bir hikâye anlatıyor. Ajanlar artık her yerde. Stack Overflow'un 2026 anketinde, yapay zekâ kullanan geliştiricilerin üçte ikisi kodlama ajanı kullandığını söylüyor. Anthropic, kendi mühendislerinin artık işlerinin yaklaşık %60'ında Claude kullandığını ve kendilerini yaklaşık %50 daha üretken hissettiğini bildiriyor.

Araştırmalar daha temkinli bir hikâye anlatıyor. METR'in 2025'teki randomize deneyinde, yapay zekâ kullanan deneyimli geliştiriciler gerçek görevleri **%19 daha uzun** sürede bitirdi. İşin garip yanı: yine de yaklaşık %20 daha hızlı olduklarına *inanıyorlardı*. Yaklaşık 700 şirketi kapsayan bir Harvard çalışma makalesine göre, ekipler ajanları benimsedikten sonra yaklaşık %30 daha fazla kod yazdı ama öncekinden **daha fazla sorun çözmedi**.

Peki hangisi doğru?

Bizim deneyimimize göre: ikisi de. Ajanlar iş üretmekte gerçekten daha hızlı. Bir *ekibin* sonunda hızlanıp hızlanmadığı ise etraflarındaki her şeye bağlı. En çok da insanlara.

## Ajanların gerçekten parladığı yerler

**1. Ekibin zaten çözdüğü bir kalıbı tekrarlamak.**

Ekibim bir veri pipeline'ındaki değişikliği elle, dikkatle yaptı. Sonra bir ajandan ne yaptığımızı anlamasını ve aynısını diğerlerine uygulamasını istedim. Yirmi repoda yaptı. Aynı gün daha sonra ona otuz repo daha verdim. İşi paralel çalışan üç ajana böldü ve yaklaşık on dört dakikada bitirdiler.

Bunlar oyuncak script'ler değildi. Her repo canlıda çalışan bir pipeline'dı, bazılarının tek başına binlerce satırı vardı. Aynı değişikliği elle, dikkatle yapmak ekibin günlerini alırdı.

İdeal nokta tam da bu. **Sistemi bilen insanlardan tek bir çözülmüş örnek, ajanlardan çok sayıda kopya.**

**2. Saati insanların tuttuğu titiz operasyon işleri.**

Canlıdaki bir veritabanını blue/green geçişiyle yükselttik. Bir ajan planlamaya yardım etti, işi gece çalıştırdı ve izledi. Asıl geçiş yaklaşık 34 saniye sürdü. Bu arada yaklaşık bin tabloda eksik bir index buldu, onu da düzelttik.

Ne zaman olacağına, ne sıklıkla kontrol edileceğine ve "bitti"nin ne anlama geldiğine biz karar verdik. Gerisini ajan yaptı.

**3. Fikirden yayına geçmek.**

O akşam paywall'lu bir ürünü yayına almamız gerekiyordu. Ürün, içerik ve neyin satılacağına dair kararlar zaten ekibindi. Bunlar hazır olunca kayıt, ödeme, bir API ve içerik kısıtlaması yaklaşık doksan dakika sonra yayındaydı. Ekibin tanımladığı akışlar üzerine kurulan eksiksiz bir destek merkezi ise yaklaşık altı saat sürdü.

Bu, daha büyük saha deneylerinin gösterdiğiyle örtüşüyor. Microsoft, Accenture ve bir Fortune 100 şirketinde yaklaşık 5.000 geliştiriciyle yapılan bir çalışma, haftada yaklaşık **%26 daha fazla tamamlanan görev** buldu. Anthropic ise mühendislerinin yapay zekâyla yaptığı işin %27'sinin **başka türlü hiç yapılmayacağını** tespit etti.

**4. İkinci bir göz.**

Bir veritabanı proxy'si istediğimizde ajan, bu kurulumun uzun bir veritabanı kullanıcısı listesini yeni bir ağ yoluna açacağı konusunda uyardı. Daha sıkı kısıtlanmış bir alternatif önerdi, mevcut kurulumumuzun neden bozulmayacağını açıkladı ve ne kadar ileri gideceğimize bizim karar vermemizi istedi.

Ajanlar çoğu zaman odada "dur, bu riskli" diyen ilk ses oluyor. Ama odadaki seslerden yalnızca biri. Odanın kendisi değil.

## Nerede yanlış yapıyorlar

**1. Ne demek istediğinizi değil, ne dediğinizi optimize ediyorlar.**

Bir ajan doğru çalışan bir veri backfill'i tasarladı. Ama gerekenden çok daha pahalıydı. Ancak "daha ucuz bir yolu var mı?" diye sorduğumuzda, sebebin kendi tasarımı olduğunu açıkladı ve çok daha ucuz bir yol önerdi.

Kimse maliyetin önemli olduğunu söylememişti. Yani ajan için önemli değildi. Bunu fark etmek için altyapımızın ne kadara mal *olması gerektiğini* bilen insanlar gerekti.

Yakın zamanda [yapay zekânın tam olarak istediğimizi yapması](/tr/blog/what-if-ai-is-doing-exactly-what-we-asked/) üzerine yazmıştım. Bu, o sorunun gündelik hali.

**2. Kararları sessizce veriyorlar.**

Farklı projelerde ajanlar, ekibin zaten üzerinde anlaştığı bir kimlik doğrulama yaklaşımını değiştirdi, müşteri e-posta yanıtlarının kime gideceğini değiştirdi ve bir ayarı secrets manager'dan çıkarıp düz bir ortam değişkenine taşıdı. Bir seferinde bir ajan, ona yalnızca *referans* olarak verdiğimiz repoyu düzenledi.

Bunların hiçbiri bug değildi. Bunlar **karardı** ve kimse bize sormadı. Her biri, burada işlerin nasıl yürümesi gerektiğini bilen biri sayesinde yakalandı.

Bence araştırmaların iyi yakaladığı kısım bu. 700 şirketlik çalışmada pull request'ten merge'e kadar geçen süre %49 arttı, yeniden çalışma gerektiren değişikliklerin oranı da neredeyse iki katına çıktı. Yazmak ucuzladı. **İncelemek ucuzlamadı.**

Ve kodu incelemek yetmiyor. Seçimleri de incelemek gerekiyor. Bunun için de o seçimleri anlayan insanlar gerekiyor.

**3. Sınırsız özerklik.**

Harici bir serviste yaşanan kesinti sırasında bir ajan, durup sebebi bulmak yerine arka planda her birkaç dakikada bir build'i yeniden deneyen bir döngüyü çalışır halde tuttu. Başka bir seferde toplu bir veri işlemi istedik ve ajan, plan üzerinde anlaşılmadan işe koyuldu.

İkisinde de onu durdurduk. İkinciden sonra ajanlara kalıcı bir kural verildi: **önce sormadan ne arka plan işi ne de toplu işlem.** Kural kalıcı belleğe yazıldı ve uygulandı.

Geçen yıl başka bir platformdaki bir ajan, code freeze sırasında bir kullanıcının veritabanını sildi. Hikâye dramatik olduğu için ilgi gördü. Ama sebebi sıradan: durumun hak ettiğinden daha fazla serbestliğe sahip bir ajan ve onu durdurabilecek konumda kimsenin olmaması.

**4. Uzun oturumlar zamanla kayıyor.**

En uzun oturum günlerce sürdü. Bu süre içinde ajanın belleği birkaç kez sıkıştırıldı. Her seferinde küçük şeyler gözden kaçtı: koyduğumuz kurallar, hatta hangi dilde yanıt vermesi gerektiği bile. Başka bir projede birbiriyle örtüşen o kadar çok ekran oluştu ki durup her şeyin birleştirilmesini istemek zorunda kaldık.

Çözüm sıkıcıydı ama işe yaradı: yazılı karar kayıtları ve daha sık yeni oturum başlatmak.

**5. Hızla yayına almak, güvenle yayına almakla aynı şey değil.**

Doksan dakikada yayına aldığımız paywall'da bir açık vardı: ödemeler henüz test modundayken, herkes herkese açık bir test kartıyla ücretli içeriğin kilidini açabiliyordu. Ajan bunu yakaladı, ama ancak yayından sonra. Birkaç gün içinde botlar kayıt olmaya başladı ve ek koruma eklemek zorunda kaldık.

Güvenlik araştırmaları da aynı yönü gösteriyor. Veracode, 100'den fazla modelde yapay zekânın ürettiği kodun **%45'inde** güvenlik açığı buldu.

**6. Anlama borcu.**

Bu daha sessiz bir sorun. Anthropic, yeni bir kütüphane öğrenen junior mühendislerle randomize bir çalışma yaptı. Yapay zekâ kullanan grup sonraki bir testte **%50** aldı, kullanmayan grup ise **%67**. En büyük fark debugging'deydi. Yani ajanları denetlemek için gereken becerinin ta kendisinde.

Yapay zekâyı soru sormak için kullananlar iyi sonuç aldı. İşi doğrudan devredenler alamadı.

Önceki bir yazıda buna [anlama borcu](/tr/blog/ai-solved-the-problem-humans-are-still-catching-up/) demiştim. Ajanlar bu borca girmeyi çok kolaylaştırıyor. Buna karşı en iyi koruma ise deneyimli bir ekip.

## Ajanlar ekip değil

Yukarıdaki sayılara bakıp, tek bir kişinin birkaç ajanla artık bir ekibin işini yapabileceği sonucuna varmak kolay olurdu.

Olan bu değil.

Ajanların kopyaladığı her kalıbı ekipten biri tasarladı. Her "dur", bir sorunun geldiğini görecek kadar sistemi iyi bilen birinden geldi. Maliyet sorunu, sessiz kararlar, yanlış kurulmuş e-posta akışı: hepsini, ajanlarda olmayan yılların bağlamına sahip insanlar yakaladı.

Ajanların değiştirdiği şey, **iyi bir kararla çalışan bir sistem arasındaki mesafeydi**. Benim rolüm bu mesafeyi kısaltmaktı: erişimimi ve deneyimimi kullanarak ekibin tasarladığını canlıya daha hızlı taşımak.

![Ekip planı tasarlıyor ve köprüyü koruyor, yapay zekâ ajanları ise işi canlıya taşıyor.](/images/journal/agents-are-not-the-team.png)

Ekip olmasaydı, ajanlar yanlış şeyleri çok hızlı inşa ediyor olurdu.

## Artık neyi farklı yapıyoruz

Bunların hiçbiri ajanları daha az kullanmamıza yol açmadı. Onları nasıl kullandığımızı değiştirdi.

- **Ekibin çözülmüş örneğinden başla.** Hangi dosyaların yalnızca referans olduğunu da açıkça söyle.
- **Önce plan.** Toplu, maliyetli ya da geri alınması zor her şey için ajan bir plan önerir ve herhangi bir işlemden önce bir insan onu onaylar.
- **Kısıtları talebin içine yaz.** Maliyet, kapsam, neyin değişmemesi gerektiği. Söylemezsek, yok demektir.
- **Anahtarlar insanlarda kalsın.** Bulut kaynaklarını ve yetkileri kendimiz oluşturuyoruz. Kodu ajanlar yazıyor. Canlıda değil, bir branch üzerinde çalışıyorlar.
- **Kuralları yazıya dök.** Kalıcı bellek ve proje talimat dosyaları, sınırların uzun bir oturumda ayakta kaldığı yerler.
- **Sadece diff'leri değil, kararları incele.** "Bunu neden değiştirdin?" sorduğumuz en faydalı soru.
- **Gerçek sistemde doğrula.** Ajanın gerçek sistem hakkındaki özetinde değil.
- **Sadece devretme, sor.** Bir şeyi *öğrenmek* istediğimizde ajanlardan sadece yapmalarını değil, açıklamalarını da istiyoruz.

## Güçlendirici

Google'ın 2025 DORA raporu yapay zekâyı bir **güçlendirici** olarak tanımlıyor. Güçlü ekipleri daha güçlü, zayıf süreçleri daha zayıf yapıyor. Yapay zekâ artık daha yüksek teslimat hızıyla ilişkilendiriliyor, ama aynı zamanda daha fazla istikrarsızlıkla da.

Bizim gördüğümüz de buydu. Ajanlar muhakemenin ve uzmanlığın yerini almadı. Onları asıl mesele haline getirdi.

**Kodu ajanlar yazıyor. Kararlar hâlâ ekibin.**

METR'in yeni çalışmasındaki geliştiriciler yapay zekâ araçlarına o kadar bağlanmıştı ki birçoğu onlarsız çalışmayı reddetti ve bu da deneyi bozdu. Onları anlıyorum. Biz de geri dönmezdik.

Ama soru hiçbir zaman ajanların hızlı olup olmadığı değildi.

Soru şu: Ekiplerimiz ajanların ne yapması gerektiğine karar vermekte, ajanlar bizim yerimize karar verdiğinde de bunu fark etmekte daha iyi hale geliyor mu?

*See you in a Thoughtful Future.*


### Kaynaklar

METR (2025). *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.*  
https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

METR (2026). *We are Changing our Developer Productivity Experiment Design.*  
https://metr.org/blog/2026-02-24-uplift-update/

Ars Technica via Slashdot (2026). *AI Coding Agents Generate More Code, But Not More Software.*  
https://tech.slashdot.org/story/26/10/12/0234217/ai-coding-agents-generate-more-code-but-not-more-software

Cui, Z., Demirer, M., Jaffe, S., Musolff, L., Peng, S. & Salz, T. *The Effects of Generative AI on High Skilled Work.* Summary by MIT Sloan.  
https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-affects-highly-skilled-workers

Shen, J. & Tamkin, A. (2026). *How AI assistance impacts the formation of coding skills.* Anthropic.  
https://www.anthropic.com/research/AI-assistance-coding-skills

Anthropic (2025). *How AI is transforming work at Anthropic.*  
https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic

Google DORA (2025). *State of AI-assisted Software Development.*  
https://blog.google/technology/developers/dora-report-2025/

Veracode (2025). *2025 GenAI Code Security Report.*  
https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/

Stack Overflow (2026). *The results of the 2026 Developer Survey are here.*  
https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/

eWeek (2025). *Replit AI Coding Assistant Failure.*  
https://www.eweek.com/news/replit-ai-coding-assistant-failure/
