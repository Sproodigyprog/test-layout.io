<!-- Сначала метрику нужно инициализировать, вставив её без скрипта с отложенной загрузкой -->

<script>
  let fired = false;

  window.addEventListener('scroll', () => {
    if (fired === false) {
      fired = true;

      setTimeout(() => {
        // Здесь все эти тормознутые трекеры, чаты и прочая ересь,
        // без которой жить не может отдел маркетинга, и которые
        // дико бесят разработчиков, когда тот же маркетинг приходит
        // с вопросом "почему сайт медленно грузится, нам гугл сказал"

        // Yandex.Metrika counter
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(48474650, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
        // Yandex.Metrika counter
      }, 1000)
    }
  });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/48474650" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
