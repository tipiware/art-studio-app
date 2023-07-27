$(document).ready(function(){
    
  	$('.home-inner').addClass('animate');

    
 var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['ar'] = new Array();

    // English content
    arrLang['en']['home'] = 'Home';
    arrLang['en']['services'] = 'Services';
    arrLang['en']['about'] = 'About';
    arrLang['en']['why'] = 'Why Us';
    arrLang['en']['contact'] = 'Contact';
    
    arrLang['en']['name'] = 'Art Studio';
    arrLang['en']['trust'] = 'Best Art In The Town';
    arrLang['en']['start'] = 'Get Started';

    arrLang['en']['our'] = 'Our Services';
    arrLang['en']['mainteinance'] = 'Painting';
    arrLang['en']['residental'] = 'Sculpting';
    arrLang['en']['commercial'] = 'Commercial Service';
    arrLang['en']['main-pra1'] = 'Welcome to our creative haven! At our studio, we are passionate about bringing art to life through the interplay of sculpting, photographing, and painting. As a versatile and skilled team of artists, we offer a range of artistic services that cater to various needs and visions. Our sculpting services breathe life into formless materials, transforming them into captivating sculptures that tell stories of their own. Through our photography expertise, we capture fleeting moments and preserve cherished memories in timeless images. In the realm of painting, our brushes wield a magical touch, adding colors and emotions to blank canvases. Whether you seek bespoke sculptures, captivating photographs, or expressive paintings, we are here to collaborate and create art that resonates with your soul. Join us in this artistic journey, where imagination knows no bounds, and beauty finds its eternal expression. ';

    arrLang['en']['main-pra'] = 'Painting is the practice of applying paint, pigment, color or other medium to a solid surface. The medium is commonly applied to the base with a brush, knives, sponges, and airbrushes, can be used. It  describes both the act and the result of the action. ';
    arrLang['en']['comm-pra'] = 'Sculpture is the art work which is physically presented in the dimensions of height, width and depth. It is one of the plastic arts. Durable sculptural processes originally used carving and modelling, in stone, metal, ceramics, wood and other materials .';
    arrLang['en']['res-pra'] = 'Photography is the practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many area such as art, film and video production. ';

    arrLang['en']['dream'] = 'Lets Build Your Dream Together';
    arrLang['en']['dream-pra'] = "Unlock your artistic potential at our studio, where creativity knows no bounds. Immerse yourself in a world of colors, shapes, and emotions, as our experienced artists guide you on a transformative journey. Whether you're a seasoned artist or a beginner, we offer a nurturing space to explore painting, sculpting, and photography. Discover the joy of self-expression and witness your visions take form in captivating masterpieces. Embrace the power of art to inspire, heal, and connect with others. Join our vibrant community and let your imagination flourish as we promote the art of bringing dreams to life.";
    
    arrLang['ar']['project'] = 'Masterpiece';
    arrLang['ar']['total'] = 'Total artist';
    arrLang['ar']['client'] = 'Sold';

    arrLang['en']['expert'] = 'Expert Guidance';
    arrLang['en']['quality'] = 'Inclusive Environment';
    arrLang['en']['customer'] = 'Captivating Masterpieces';
    
    arrLang['en']['expert-pra'] = 'Our experienced artists provide personalized guidance, nurturing your skills and helping you realize your full artistic potential.';
    arrLang['en']['quality-pra'] = "Whether you're a seasoned artist or a beginner, our studio fosters a welcoming and supportive space for everyone to thrive.";      
    arrLang['en']['customer-pra'] = 'Witness your visions take form in captivating masterpieces, guided by skilled artists who bring your dreams to life.';
    arrLang['en']['comm-pra'] = 'Sculpture is the art work which is physically presented in the dimensions of height, width and depth. It is one of the plastic arts. Durable sculptural processes originally used carving and modelling, in stone, metal, ceramics, wood and other materials .';
    arrLang['en']['phrase-title'] = 'Unleashing dreams,where vision meets reality';
    arrLang['en']['phrase-pra'] = 'Embarking on extraordinary journeys to fulfill your dreams';
    
    arrLang['en']['footer-phrase'] = 'Welcome to our studio! We are unique and creative, using waste as our material to advocate for environmental protection and sustainable development. Here, we believe that every piece of waste holds inherent beauty and value. Through clever design and exquisite craftsmanship, our artists transform waste into breathtaking artworks and practical items. Our mission is to inspire people to rethink the value of resources and the importance of protecting the planet through creativity and art. Join us on this journey of environmental innovation and let waste bloom with renewed life!';
    arrLang['en']['footer-location'] = 'Our Location';
    arrLang['en']['footer-street'] = 'Happy town, Malaysia';
    arrLang['en']['footer-contact'] = 'Contact Info';
    arrLang['en']['footer-num'] = '+60123456789';
    arrLang['en']['footer-name'] = 'cheng jie';


    // Chinese content (Chinese Language) 
    arrLang['ar']['home'] = '首页';
    arrLang['ar']['services'] = '服务';
    arrLang['ar']['about'] = '关于';
    arrLang['ar']['contact'] = '联系';
    
    arrLang['ar']['name'] = '艺术工作室';
    arrLang['ar']['trust'] = '城中最佳艺术创作';
    arrLang['ar']['start'] ='开始创作吧！';
    
    arrLang['ar']['our'] = '我们的服务';
    arrLang['ar']['mainteinance'] = '绘画';
    arrLang['ar']['residental'] = '雕塑';
    arrLang['ar']['commercial'] = '摄影';
    arrLang['ar']['main-pra1'] = "欢迎来到我们的创意天地！在我们的工作室里，我们热衷于通过雕塑、摄影和绘画的相互融合将艺术展现得栩栩如生。作为一支多才多艺的艺术家团队，我们提供各种艺术服务，满足不同的需求和愿景。我们的雕塑服务将无形的材料注入生命力，将它们变成引人入胜的雕塑，讲述着属于它们自己的故事。通过我们的摄影专业知识，我们捕捉瞬息即逝的瞬间，并将珍贵的记忆永久定格成永恒的影像。在绘画领域，我们的画笔拥有一抹魔幻的触碰，为空白的画布增添色彩和情感。无论您需要定制的雕塑、引人入胜的照片，还是富有表现力的绘画作品，我们都愿意合作，创作出与您心灵共鸣的艺术品。加入我们的艺术之旅，在这里，想象力没有界限，美丽将找到永恒的表达。";
    arrLang['ar']['main-pra'] = "拥抱色彩与创意的力量，品味我们精湛的绘画。从古典到现代，艺术家为每一笔注入生命，打造引人入胜、与心灵共鸣的杰作"
    arrLang['ar']['res-pra'] = "我们娴熟的双手将无形材料塑造成迷人的雕塑。让您的愿景在天才雕塑家的手中成形，为您的构思带来深度和立体感。";
    arrLang['ar']['comm-pra'] = "专业的摄影师捕捉瞬息万变的时刻和真实情感，将其永恒地保留在时间的画框中。透过我们的镜头，体验艺术的故事讲述";

    arrLang['ar']['dream'] = '让我们一起打造您的梦想';
    arrLang['ar']['dream-pra'] = '在我们的工作室释放您的艺术潜能，创造力无限。沉浸于色彩、形状和情感的世界，经验丰富的艺术家将引导您踏上变革之旅。不论您是资深艺术家还是初学者，我们提供培育空间，探索绘画、雕塑和摄影。体验自我表达的喜悦，见证愿景在引人入胜的杰作中成形。拥抱艺术的力量，激发、治愈并与他人联系。加入我们充满活力的社区，让您的想象力迸发，我们将推广将梦想实现的艺术。';
    
    arrLang['ar']['project'] = '作品总数';
    arrLang['ar']['total'] = '艺术家总数';
    arrLang['ar']['client'] = '售出的作品';

    arrLang['ar']['expert'] = '专业指导';
    arrLang['ar']['quality'] = '包容的环境';
    arrLang['ar']['customer'] = '迷人的杰作';
    
    arrLang['ar']['expert-pra'] = '我们经验丰富的艺术家为您提供个性化的指导，培养您的技巧，帮助您实现完整的艺术潜能。';
    arrLang['ar']['quality-pra'] = '无论您是经验丰富的艺术家还是初学者，我们都营造了一个欢迎和支持的空间，让每个人都能茁壮成长。';      
    arrLang['ar']['customer-pra'] = '目睹您的愿景在迷人的杰作中得以实现，由熟练的艺术家引导，将您的梦想演绎成真实的艺术品。';

    arrLang['ar']['phrase-title'] = '释放梦想，愿景与现实相遇';
    arrLang['ar']['phrase-pra'] = '踏上非凡之旅，实现您的梦想';
    
    arrLang['ar']['footer-phrase'] = '欢迎来到我们的创意天地！在我们的工作室里，我们热衷于通过雕塑、摄影和绘画的相互融合将艺术展现得栩栩如生。作为一支多才多艺的艺术家团队，我们提供各种艺术服务，满足不同的需求和愿景。我们的雕塑服务将无形的材料注入生命力，将它们变成引人入胜的雕塑，讲述着属于它们自己的故事。通过我们的摄影专业知识，我们捕捉瞬息即逝的瞬间，并将珍贵的记忆永久定格成永恒的影像。在绘画领域，我们的画笔拥有一抹魔幻的触碰，为空白的画布增添色彩和情感。无论您需要定制的雕塑、引人入胜的照片，还是富有表现力的绘画作品，我们都愿意合作，创作出与您心灵共鸣的艺术品。加入我们的艺术之旅，在这里，想象力没有界限，美丽将找到永恒的表达';
    arrLang['ar']['footer-location'] = 'Our Location';
    arrLang['ar']['footer-street'] = 'Happy town, Malaysia';
    arrLang['ar']['footer-contact'] = 'Contact Info';
    arrLang['ar']['footer-num'] = '+60123456789';
    arrLang['ar']['footer-name'] = 'cheng jie';


      // Chinese content (Chinese Language) 
    arrLang['ar']['home'] = '首页';
    arrLang['ar']['services'] = '服务';
    arrLang['ar']['about'] = '关于';
    arrLang['ar']['contact'] = '联系';
    
    arrLang['ar']['name'] = '艺术工作室';
    arrLang['ar']['trust'] = '城中最佳艺术创作';
    arrLang['ar']['start'] ='开始创作吧！';
    
    arrLang['ar']['our'] = '我们的服务';
    arrLang['ar']['mainteinance'] = '绘画';
    arrLang['ar']['residental'] = '雕塑';
    arrLang['ar']['commercial'] = '摄影';
    arrLang['ar']['main-pra1'] = "欢迎来到我们的创意天地！在我们的工作室里，我们热衷于通过雕塑、摄影和绘画的相互融合将艺术展现得栩栩如生。作为一支多才多艺的艺术家团队，我们提供各种艺术服务，满足不同的需求和愿景。我们的雕塑服务将无形的材料注入生命力，将它们变成引人入胜的雕塑，讲述着属于它们自己的故事。通过我们的摄影专业知识，我们捕捉瞬息即逝的瞬间，并将珍贵的记忆永久定格成永恒的影像。在绘画领域，我们的画笔拥有一抹魔幻的触碰，为空白的画布增添色彩和情感。无论您需要定制的雕塑、引人入胜的照片，还是富有表现力的绘画作品，我们都愿意合作，创作出与您心灵共鸣的艺术品。加入我们的艺术之旅，在这里，想象力没有界限，美丽将找到永恒的表达。";
    arrLang['ar']['main-pra'] = "拥抱色彩与创意的力量，品味我们精湛的绘画。从古典到现代，艺术家为每一笔注入生命，打造引人入胜、与心灵共鸣的杰作"
    arrLang['ar']['res-pra'] = "我们娴熟的双手将无形材料塑造成迷人的雕塑。让您的愿景在天才雕塑家的手中成形，为您的构思带来深度和立体感。";
    arrLang['ar']['comm-pra'] = "专业的摄影师捕捉瞬息万变的时刻和真实情感，将其永恒地保留在时间的画框中。透过我们的镜头，体验艺术的故事讲述";

    arrLang['ar']['dream'] = '让我们一起打造您的梦想';
    arrLang['ar']['dream-pra'] = '在我们的工作室释放您的艺术潜能，创造力无限。沉浸于色彩、形状和情感的世界，经验丰富的艺术家将引导您踏上变革之旅。不论您是资深艺术家还是初学者，我们提供培育空间，探索绘画、雕塑和摄影。体验自我表达的喜悦，见证愿景在引人入胜的杰作中成形。拥抱艺术的力量，激发、治愈并与他人联系。加入我们充满活力的社区，让您的想象力迸发，我们将推广将梦想实现的艺术。';
    
    arrLang['ar']['project'] = 'Karya';
    arrLang['ar']['total'] = 'Bilangan seniman';
    arrLang['ar']['client'] = 'Jualan';

    arrLang['ar']['expert'] = '专业指导';
    arrLang['ar']['quality'] = '包容的环境';
    arrLang['ar']['customer'] = '迷人的杰作';
    
    arrLang['ar']['expert-pra'] = '我们经验丰富的艺术家为您提供个性化的指导，培养您的技巧，帮助您实现完整的艺术潜能。';
    arrLang['ar']['quality-pra'] = '无论您是经验丰富的艺术家还是初学者，我们都营造了一个欢迎和支持的空间，让每个人都能茁壮成长。';      
    arrLang['ar']['customer-pra'] = '目睹您的愿景在迷人的杰作中得以实现，由熟练的艺术家引导，将您的梦想演绎成真实的艺术品。';

    arrLang['ar']['phrase-title'] = '释放梦想，愿景与现实相遇';
    arrLang['ar']['phrase-pra'] = '踏上非凡之旅，实现您的梦想';
    
    arrLang['ar']['footer-phrase'] = '欢迎来到我们的创意天地！在我们的工作室里，我们热衷于通过雕塑、摄影和绘画的相互融合将艺术展现得栩栩如生。作为一支多才多艺的艺术家团队，我们提供各种艺术服务，满足不同的需求和愿景。我们的雕塑服务将无形的材料注入生命力，将它们变成引人入胜的雕塑，讲述着属于它们自己的故事。通过我们的摄影专业知识，我们捕捉瞬息即逝的瞬间，并将珍贵的记忆永久定格成永恒的影像。在绘画领域，我们的画笔拥有一抹魔幻的触碰，为空白的画布增添色彩和情感。无论您需要定制的雕塑、引人入胜的照片，还是富有表现力的绘画作品，我们都愿意合作，创作出与您心灵共鸣的艺术品。加入我们的艺术之旅，在这里，想象力没有界限，美丽将找到永恒的表达';
    arrLang['ar']['footer-location'] = 'Our Location';
    arrLang['ar']['footer-street'] = 'Happy town, Malaysia';
    arrLang['ar']['footer-contact'] = 'Contact Info';
    arrLang['ar']['footer-num'] = '+60123456789';
    arrLang['ar']['footer-name'] = 'cheng jie';

     var lang;
    
    (function(window, $) {
      lang = window.navigator.language;
    if (lang == 'ar' ) {
        lang = 'ar';  
    
    
    }
    else{
      lang = 'en';  
    }
    })(window, jQuery);

    

    // Process translation
    $(function() {
      $('.translate').click(function() {
          lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        // $("p").css( "color", "red");
          if(lang == "ar"){
         $('html, body').css( "direction"," ltr" );

          }

      });
    });
    
    
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    
    
});

 