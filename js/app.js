const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

window.addEventListener('scroll', () => {

   if (window.scrollY > 50) {
      $("header").css("width", "100%");
      $("header").css("border-radius", "0");
      $("header").css("left", "0");
      $("header").css("border", "none");
      $("header").css("background", "var(--color-text)");
      $("header").css("border-bottom", "var(--primary-100) 5px double");
      $("header ul li a").css("color", "var(--primary-100)");
      $("header label span").css("background", "var(--primary-100)");
      
      if (prefersDarkMode) {
         $("header picture img").attr("src", "./img/logo.png");
         $("header picture source").attr("srcset", "./img/logo.png");
      }
      else{
         $("header picture img").attr("src", "./img/logo_dark.png");
         $("header picture source").attr("srcset", "./img/logo_dark.png");
      }
      
      
   }
   else if (window.scrollY <= 50) {
      $("header").removeAttr('style');
      $("header").removeAttr('style');
      $("header ul li").removeAttr('style');
      $("header ul li a").removeAttr('style');
      $("header label span").removeAttr('style');

      if (prefersDarkMode) {
         $("header picture img").attr("src", "./img/logo_dark.png");
         $("header picture source").attr("srcset", "./img/logo_dark.png");
      }
      else{
         $("header picture img").attr("src", "./img/logo.png");
         $("header picture source").attr("srcset", "./img/logo.png");
      }

   }

});