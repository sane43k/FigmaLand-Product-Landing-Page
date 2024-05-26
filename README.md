# FigmaLand Product Landing Page

Сделано с помощью шаблонизатора Pug и препроцессора SCSS.  
Проект собран с помощью сборщика gulp.  
Ссылка на шаблон:  
https://www.figma.com/design/P5fXoJnLb6Gt1JehZixfwB/13.-Figma-Product-Landing-Page-(Community)?node-id=0-3517&t=L4JHRGTXBZvxxsyB-0

## Front-end/Вёрстка сайта. Gulp сборщик. Pug + Sass/SCSS.

Спасибо что выбрали работу с нашей командой!  
Данным описанием мы постараемся донести всю необходимую информацию по работе с нашей вёрсткой. Расскажем о существующей структуре, как с ней работать, как без труда скомпилировать самостоятельно.

Сборщик необходим для автоматизации задач в повседневной front-end разработке. Стили компилируются из SASS/SCSS (опционально также поддерживается CSS фреймворк Tailwind CSS). HTML код компилируется из Pug. Данные препроцессоры и CSS фреймворк позволяют существенно ускорить разработку, а также упростить дальнейшую поддержку. Автоматически сжимаются файлы, оптимизируются картинки, JS код можно писать на последнем ECMAScript. При  каждом сохранении файла в редакторе, браузер автоматически перезагружает страницу.

## Общая структура

* ```html``` — собранная, оптимизированная и полностью готовая к использованию вёрстка;
* ```sources``` — исходные файлы проекта, сам сборщик, конфиги и прочее;
* ```README.md``` — данный readme.

Скорее всего вам потребуется только содержимое ```html```. Однако мы рекомендуем организовать работу таким образом, чтобы вручную ничего не вносилось, не правилось в данной папке. Т.к. в случае дальнейших доработок с нашей стороны, вам может потребоваться повторно делать все изменения в собранной вёрстке либо вручную переносить обновления в свой код. Постарайтесь автоматизировать процесс, либо документировать все необходимые изменения, чтобы при получении обновлённой ```html``` вы могли без труда обновить код у себя.

Приветствуется работа с ```sources```. После изменений вы можете передать её обратно и мы спокойно продолжим работу. Обмен также удобно организовать через Git.

## Как работать с исходниками?

В большинстве случаев это не должно вызвать проблем. Мы постарались использовать проверенные компоненты и технологии, максимально унифицировать процесс и учесть в данной инструкции все шаги для успешной сборки проекта.

## Что включает в себя сборка?
* [babel-loader, @babel/core, @babel/preset-env](https://www.npmjs.com/package/babel-loader) - загрузчик [Babel](https://babeljs.io/) для Webpack, для транспиляции современного синтаксиса в доступный для большинства браузеров;
* [browser-sync](https://browsersync.io/docs/gulp) - живая перезагрузка веб-страницы при внесении изменений в файлы вашего проекта;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - использование ECMAScript с [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация JS-файлов;
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция Sass/SCSS в CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация CSS-файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - карта стилей;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - объединение файлов;
* [gulp-add-src](https://www.npmjs.com/package/gulp-add-src) — добавление файлов для объединения;
* [gulp-if](https://www.npmjs.com/package/gulp-if) — добавление условий при выполнении задач gulp;
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — сжатие изображений PNG, JPG, GIF и SVG;
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) — дополнение к gulp-imagemin для работы с PNG-изображениями;
* [imagemin-jpeg-recompress](https://www.npmjs.com/package/imagemin-jpeg-recompress) — дополнение к gulp-imagemin для работы с JPG-изображениями;
* [gulp-webp](https://github.com/sindresorhus/gulp-webp) — создание и оптимизация изображений в формате WebP;
* [gulp-favicons](https://github.com/evilebottnawi/favicons) — генератор фавиконок для вашего проекта;
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание SVG-спрайтов;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - замена строк в исходных файлах;
* [gulp-newer](https://www.npmjs.com/package/gulp-newer) — дополнительный плагин к ```gulp-imagemin```, позволяет сжимать только новые изображения;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) — оповещения в командной строке (например, ошибки в Sass/SCSS);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) — отладка в терминале;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в ваших файлах проекта;
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — удаление файлов и папок;
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) — поддержка PostCSS в потоке Gulp; 
* [postcss](https://www.npmjs.com/package/postcss) — инструмент для преобразования стилей с помощью JS-плагинов; 
* [tailwindcss](https://www.npmjs.com/package/tailwindcss) — CSS фреймворк для ускорения разработки пользовательских интерфейсов; 
* [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin) — плагин для Webpack для минимизации JS кода; 
* [webpack](https://webpack.js.org/) — сборщик JS-модулей с широкими возможностями настройки;
* [webpack-cli](https://www.npmjs.com/package/webpack-cli) — интерфейс командной строки для Webpack;
* [webpack-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware) — промежуточное ПО для работы Webpack в режиме разработки;
* [webpack-merge](https://www.npmjs.com/package/webpack-merge) — слияние и объединение конфигураций Webpack;
* [webpack-stream](https://www.npmjs.com/package/webpack-stream) — работа Webpack в потоке Gulp.

## Как подготовиться?

* Node версии 14+ должен быть [установлен](https://nodejs.org/en/download/);
<details><summary>pnpm должен быть установлен...</summary>
<p>

```sh
npm install -g pnpm
```  

</p>
</details>
<details><summary>gulp-cli должен быть установлен...</summary>
<p>

```sh
npm install -g gulp-cli
```  

</p>
</details>
<details><summary>дополнительно для Windows может понадобиться...</summary>
<p>

* [Git for Windows](https://gitforwindows.org/);  
* в PowerShell, запущенной от имени адмиинистратора:  
```sh
npm install --global windows-build-tools
```  
```sh
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

</p>
</details>
<details><summary>дополнительно для Linux может понадобиться...</summary>
<p>

* на примере Ubuntu 18.04+:  
```sh
sudo apt install -y build-essential attr autoconf libjpeg-dev libpng-dev libtiff-dev libgif-dev
```  

</p>
</details>

* скачайте вёрстку как zip и распакуйте или клонируйте с гита (возможно, вы уже сделали это, если читаете данный документ);
* перейдите в консоли в папку с исходниками:
```sh
cd sources
```
* введите команду, которая скачает необходимые компоненты для корректной работы сборщика:
```sh
pnpm i --frozen-lockfile
```

Если процесс завершился с ошибкой, пожалуйста, убедитесь, что все вышеуказанные компоненты установлены и их версии соответствуют. Если проблему не удаётся решить — свяжитесь с нами, подскажем как действовать.

## Как собрать?

Как вы уже знаете, проект собирается в папку ```html``` рядом с ```sources```.

У нас открыт терминал, рабочая директория — ```sources```  
Запускаем:
```sh
gulp
```

![](https://myscreen.onl/rv6wj)

У вас должен открыться браузер с локальным сервером и работающим browser-sync. Сборка прошла успешно, вёрстка в папке ```html``` полностью обновлена из текущих исходников.

Одновременно запущен мониторинг на следующие директории:
* ```sources/src/pug/**/*.pug```
* ```sources/src/sass/**/*.{scss,sass}```
* ```sources/src/fonts/**/*```
* ```sources/src/images/**/*``` — все картинки проходят автоматическое сжатие
* ```sources/src/images/favicons/*``` — из одной картинки генерируется необходимый набор фавиконок
* ```sources/src/images/skip-optimization/**/*``` — здесь картинки минуют оптимизацию
* ```sources/src/images/sprite-svg/*.svg``` — здесь svg собираются в один спрайт
* ```sources/src/js/**/*.js``` — из js файлов и модулей собирается один main.min.js
* ```sources/src/html_direct_copying/**/*``` — статичные файлы/папки, копируются прямиком в html

Для останавки мониторинга и локального сервера нажмите ```Ctrl + C``` в терминале.

:warning: **Если для сборки скриптов используется режим работы сборщика с Webpack** ([как узнать?](#модульный-js)), то после окончания правки скриптов необходимо запустить команду ```gulp webpack``` или ```gulp build```, чтобы получить готовые итоговые файлы скриптов.

:warning: **Если в проекте используется Tailwind CSS** ([как узнать?](#tailwind-css-new)), то рекомендуем после окончания правок запустить команду ```gulp styles``` или ```gulp build```. 
_Это стоит сделать для того, чтобы в итоговый CSS не попали неиспользуемые классы, ранее скомпилированные, а затем удаленные из исходных файлов разработки._

## Сборка прервалась с ошибкой?

Пробуем сбросить кеш и установить проект заново. Для этого в ```sources``` удаляем следующие папки и файлы (при наличии):  
```sh
node_modules
pnpm-lock.yaml
.yarn
.yarnrc.yml
.pnp.js
yarn.lock
package-lock.json
```

После чего выполняем следующие команды:
```sh
pnpm install
gulp
```



## Команды (таски) сборщика

Зачастую, для готового проекта требуется изменение только отдельных элементов (стилей, изображений, скриптов, html), не запуская сборку целиком по новой.
В сборщике доступны следующие команды обновления:  
```gulp pug``` — html код  
```gulp styles``` — стили  
```gulp styles_min``` — стили с минификацией  
```gulp styles_unmin``` — стили без минификации  
```gulp scripts``` — скрипты  (**При использовании сборщика с Webpack** [?](#модульный-js) - ```gulp webpack```)   
```gulp scripts_min``` — скрипты с минификацией  (**При использовании сборщика с Webpack** [?](#модульный-js) - ```gulp webpack```)   
```gulp scripts_unmin``` — скрипты без минификации*  (**При использовании сборщика с Webpack** [?](#модульный-js) - ```gulp webpack_unmin```)   
```gulp favicons``` — favicon  
```gulp images``` — изображения  
```gulp sprite``` — svg-спрайт (после чего обязательно обновление стилей, см.выше)  
```gulp html_direct_copying``` — прямое копирование всего из ```sources/src/html_direct_copying``` в папку ```html```

Копирование вновь добавленных библиотек:  
```gulp libs``` (после чего обязательно обновление скриптов, см.выше)

Команды сборки всего проекта, но без запуска мониторинга:  
```gulp build```  
```gulp build_min``` — сборка c минификацией  
```gulp build_unmin``` — сборка без минификации*

Запуск только мониторинга:  
```gulp watch```  
```gulp watch_min``` — с минификацией  
```gulp watch_unmin``` — без минификации*

Проверка W3C HTML валидации собранных страниц:  
```gulp validateHtml```

Также валидация автоматически проверяется на лету, во время запущенного мониторинга. Сообщения об ошибках выводятся в консоль.

\* — обратите внимание на необходимость подключения js библиотек по отдельности в ```sources/src/pug/base/_layout.pug```.

## Модульный JS

❓ Как узнать, используется в вашем сборщике Webpack? 

Найдите и откройте в папке ```sources``` файл ```gulpfile.js```. В нем вам нужно найти строку ```isUseWebpack```. 
Если флажок отмечен как "true", значит ваш сборщик работает с webpack, в противном случае - сборщик не использует webpack.

По умолчанию для сборки скриптов используется Webpack с простой конфигурацией. Благодаря ему можно подключать JS-библиотеки, как модули, а также разбивать свои большие скрипты на модули для повышения читаемости и облегчения поддержки кодовой базы. 

Для подключения библиотек из ```node_modules``` не требуется писать путь до них, так как webpack по умолчанию ищет модули там. Например, подключая библиотеку Swiper с доп.модулями из ```node_modules```, вам потребуется написать: ```import Swiper, { Controller, Navigation} from "swiper";```. При этом, в выходном файле вы получите код только с ядром Swiper и нужными модулями, не забирая ничего лишнего.

> :memo: **На заметку:** Для случаев, когда требуется более одного выходного JS-файла (по умолчанию собирается только main.min.js) - добавляем в webpack.config.js под строкой с main.js, дополнительные входные точки, требующие сборки (как в закомментированном примере).

> :warning: **Важно:** Поскольку в сборщике используется строгий модуль ECMAScript, вам необходимо указывать расширение файла при его импорте. Например: import "./test-module.**js**". А также если вам требуется подключить библиотеку не из ```node_modules```, то нужно также написать путь до библиотеки вместе с ".js".

## Sass vs SCSS

Сборщик поддерживает оба формата. Единственное условие — один .sass или .scss файл должен быть написан либо на чистом sass синтаксисе, либо scss. При этом разные файлы, которые вы имортируете, могут быть по разному и написаны (.sass или .scss соответственно).

## Tailwind CSS :new:

❓ Как узнать, используется ли в вашем сборщике Tailwind CSS? 

Найдите и откройте в папке ```sources``` файл ```gulpfile.js```. В нем вам нужно найти строку ```isUseTailwind```. 
Если флажок отмечен как "true", значит ваш сборщик работает с Tailwind CSS, в противном случае - сборщик не использует CSS фреймворк.

> :warning: По умолчанию для стилей не используется Tailwind CSS, если до разработки не было согласовано его использование. 

### Что такое Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) - это CSS фреймворк, направленный на минимизацию CSS кода в проекте за счет использования заранее определенных классов, а также за счет их расширения пользовательскими классами по определенным структуре и синтаксису. Он также помогает сильно ускорить создание стилей для пользовательских интерфейсов. 
> :eye_speech_bubble: Несмотря на все очевидные плюсы использования Tailwind CSS, в силу своей специфичности, части проектов данный фреймворк попросту может быть не нужен и/или излишен. Советуем уточнять у разработчика до начала проекта, подойдет ли этот фреймворк для вашего проекта, если вы затрудняетесь с выбором.

### Особенности работы с CSS фреймворком

:memo: Для облегчения работы в VS Code с Tailwind CSS рекомендуем установить расширение [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). В параметрах установленного расширения также рекомендуется установить флажок в параметре ```"Tailwind CSS: Emmet Completions"``` (нужен для того, чтобы появлялись подсказки при работе со стандартным синтаксисом PUG).
_Подробнее о других IDE и расширениях для них можно узнать в оф.документации [на этой странице](https://tailwindcss.com/docs/editor-setup)._

:gear: Tailwind CSS обрабатывает SASS файлы, а также распознает классы во всех PUG файлах из папки PUG, и во всех JS файлах из папки JS. Сборщик уже настроен так, чтобы анализ происходил в реальном времени (_при режиме watch_), обновляя стили при компиляции JS и PUG.

:new: Мониторинг также настроен на отслеживание файла конфигурации Tailwind. Поэтому при изменении конфигурации - произойдет перезагрузка страницы с обновленными параметрами.

:warning: **При разработке PUG файлов не забывайте про специфику синтаксиса**. 
К примеру конструкция **```.example__block.text-[36px]```** **приведет к ошибке PUG**, поэтому для корректного добавления пользовательских классов со специфичным синтаксисом в PUG прописывайте их через атрибут элемента ```div(class="example__block text-[36px]")```. Также допустимо использование конструкций  вида ```.example__block(class="text-[36px]")```, однако подобный вариант является плохой практикой и не рекомендуется для использования, так как нарушает принципы единообразия кода.

:warning: **Tailwind не учитывает, является ли строка комментарием в файлах PUG, SASS и JS**, поэтому если вы закомментировали какую-то строку, например:

1. Комментарий в JS - ```// exampleElement.classList.add("text-[36px]");```, то класс ```text-[36px]``` все равно попадет в итоговый CSS.
2. Комментарий в PUG - ```// - .example__block(class="text-[36px]")```, то класс ```text-[36px]``` также, как и с JS - попадет в итоговый CSS.

Поэтому для сохранения чистоты CSS подобные комментарии требуется удалить, либо сделать неразборчивыми для анализатора Tailwind, заменив ```"class"``` на что-нибудь другое.

## Оптимизация изображений

Сборщик проводит автоматическое сжатие изображений, приоритет отдан максимальному визуальному качеству, без явных артефактов на любых дисплеях. Учитывая это, Google PageSpeed или другие аналогичные инструменты анализа сжатия изображений, могут сообщать о необходимости ещё сжать изображения — решать вам, что важнее. Изменить степень сжатия можно соответствующими параметрами в ```sources/gulp/tasks/images.js``` и перезапустить сборку ```gulp```.

**JPG**: оптимизация настроена и отлично работает, главное — использовать JPG с качеством 100% (без какого-либо первоначального сжатия).

**PNG**: оптимизация настроена и работает хорошо. В некоторых случаях TinyPNG будет лучше (по качеству и/или степени сжатия), но в целом результат близкий. PNG также сохранять оригинальный (PNG24), без сжатия и/или каких-либо оптимизаций.

**SVG**: оптимизация настроена и работает отлично. Однако сам по себе формат svg очень сложный, он может включать внутри в том числе и растровую графику(!), анимации, поэтому не исключена потеря/искажение svg на выходе (в таком случае воспользуйтесь советом ниже). Тем не менее, при тестировании, каких-либо проблем с данным оптимизатором не выявлено.

В сборке присутствует папка ```sources/src/images/skip-optimization/``` — все файлы из неё копируются без какого-либо вмешательства сразу в ```html/images/```.
Сделано на случай, если вдруг какой-то из оптимизаторов сработал плохо для того или иного изображения (оптимизируем вручную в таком случае).
**Внимание:** сохраняя файл в ```sources/src/images/skip-optimization/``` убедитесь, что нет файла с таким же именем в основной папке ```sources/src/images/```.

## Изображения в формате WebP

В сборщик встроено автоматическое создание и оптимизация формата WebP. Все растровые изображения из ```sources/src/images/webp/``` автоматически конвертируются в формат WebP и сохраняются в основной поток ```html/images/```. Качество оптимизации — 85. Достаточно для большинства случаев, но если нужен меньший вес или, наоборот, лучшее качество, то данный параметр можно изменить в ```sources/gulp/tasks/images.js``` и перезапустить gulp.

## Иконочный шрифт? Больше не используем!

Вместо него — svg спрайты. Шрифт использовали ранее для максимальной кроссбраузерности, сейчас это не актуально. Подробное сравнение [здесь](https://css-tricks.com/icon-fonts-vs-svg/).


## Bower или подключение плагинов (в том числе таких как jQuery, slick и др.)

Раньше для автоматического скачивания библиотек, плагинов был популярен Bower, сейчас практически все поддерживают добавление через PNPM.

Например, вам нужен [jQuery](https://jquery.com/) (вероятно, уже используется в вёрстке), вводим команду: ```pnpm add jquery```.

Либа скачается в "недра" ```node_modules```, а также будет прописана зависимость в ```sources/package.json```, секция ```dependencies```.
Когда зависимость уже прописана — данные команды не нужны, все автоматически скачается при развертывании проекта (```pnpm install```).
Для удаления: ```pnpm remove jquery```. Также можно вручную почистить ```sources/package.json``` и запустить ```pnpm install```.
Примечание: удаленные таким образом либы автоматически **не удаляются** из ```sources/src/libs```. Всё лишнее чистим там вручную.

:bulb: **С Webpack:** [?](#модульный-js) Если у вас задача сборки скриптов лежит на Webpack ("isUseWebpack: **true**" в ```gulpfile.js```), то Вы можете подключать библиотеки напрямую из ```node_modules``` в свой JS файл (```import Swiper, { Controller, Navigation} from "swiper";```).

:bulb: **Без Webpack:** [?](#модульный-js) Если же сборка скриптов работает в режиме безмодульности ("isUseWebpack: **false**" в ```gulpfile.js```), или по каким-то причинам, нужно подключить библиотеку из папки ```libs```, то делаем следующее:

Запускаем: ```gulp libs``` (или полную сборку снова ```gulp```) — либы целиком скопируются в ```sources/src/libs```. Там будут в том числе исходные файлы, документация. В вёрстке обычно используются только собранные минифицированные дистрибутивы, чаще всего они в папке ```dist```.

Путь к библиотекам прописывается в ```sources/src/js/_libs_concat.cjs```.
При сборке все JS сливаются в один файл ```html/js/main.min.js``` он и подключен в pug ```sources/src/pug/base/_layout.pug```.


## Вопросы, замечания, предложения?

Пишите нам!
