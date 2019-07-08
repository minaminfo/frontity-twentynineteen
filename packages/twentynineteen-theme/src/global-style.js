import { css } from "frontity";
const globalStyles = css`
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

html {
  font-size: 22px;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.8;
  margin: 0;
  text-rendering: optimizeLegibility;
}

button,
input,
select,
optgroup,
textarea {
  color: #111;
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-weight: 400;
  line-height: 1.8;
  text-rendering: optimizeLegibility;
}

.main-navigation,
.page-description,
h2.author-title,
.author-description .author-link,
.not-found .page-title,
.error-404 .page-title,
.post-navigation .post-title,
.pagination .nav-links,
.comments-title,
.comment-author .fn,
.no-comments,
.site-title,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-info,
.page-description,
.post-navigation .post-title,
.comment-metadata,
.discussion-meta-info,
.entry-meta,
.entry-footer,
.comment-reply-link,
#cancel-comment-reply-link,
img:after,
.page-links,
.sticky-post {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.page-title {
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
}

.site-branding,
.main-navigation ul.main-menu > li,
.social-navigation,
.author-description .author-bio,
.nav-links {
  line-height: 1.25;
}

h1 {
  font-size: 2.25em;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 2.8125em;
  }
}

.entry-title,
.not-found .page-title,
.error-404 .page-title,
.has-larger-font-size,
h2 {
  font-size: 1.6875em;
}

@media only screen and (min-width: 768px) {
  .entry-title,
  .not-found .page-title,
  .error-404 .page-title,
  .has-larger-font-size,
  h2 {
    font-size: 2.25em;
  }
}

.has-regular-font-size,
.has-large-font-size,
.comments-title,
h3 {
  font-size: 1.6875em;
}

.site-title,
.site-description,
.main-navigation,
.nav-links,
.page-title,
.page-description,
.comment-author .fn,
.no-comments,
h2.author-title,
p.author-bio,
h4 {
  font-size: 1.125em;
}

.pagination .nav-links,
.comment-content,
h5 {
  font-size: 0.88889em;
}

.entry-meta,
.entry-footer,
.discussion-meta-info,
.site-info,
.has-small-font-size,
.comment-reply-link,
.comment-metadata,
.comment-notes,
.sticky-post,
#cancel-comment-reply-link,
img:after,
h6 {
  font-size: 0.71111em;
}

.site-title,
.page-title {
  font-weight: normal;
}

.page-description,
.page-links a {
  font-weight: bold;
}

.site-description {
  letter-spacing: -0.01em;
}

.post-navigation .post-title,
.entry-title,
.not-found .page-title,
.error-404 .page-title,
.comments-title,
blockquote {
  hyphens: auto;
  word-break: break-word;
}

@media only screen and (min-width: 768px) {
  .entry-title {
    hyphens: none;
  }
}

p {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

dfn,
cite,
em,
i {
  font-style: italic;
}

blockquote cite {
  font-size: 0.71111em;
  font-style: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

pre {
  font-size: 0.88889em;
  font-family: "Courier 10 Pitch", Courier, monospace;
  line-height: 1.8;
  overflow: auto;
}

code,
kbd,
tt,
var {
  font-size: 0.88889em;
  font-family: Menlo, monaco, Consolas, Lucida Console, monospace;
}

abbr, acronym {
  border-bottom: 1px dotted #666;
  cursor: help;
}

mark,
ins {
  background: #fff9c0;
  text-decoration: none;
}

big {
  font-size: 125%;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:focus {
  text-decoration: underline;
}

html[lang="ar"] .site *,
html[lang="ary"] .site *,
html[lang="azb"] .site *,
html[lang="ckb"] .site *,
html[lang="fa-IR"] .site *,
html[lang="haz"] .site *,
html[lang="ps"] .site * {
  font-family: Tahoma, Arial, sans-serif !important;
}

html[lang="be"] .site *,
html[lang="bg-BG"] .site *,
html[lang="kk"] .site *,
html[lang="mk-MK"] .site *,
html[lang="mn"] .site *,
html[lang="ru-RU"] .site *,
html[lang="sah"] .site *,
html[lang="sr-RS"] .site *,
html[lang="tt-RU"] .site *,
html[lang="uk"] .site * {
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif !important;
}

html[lang="zh-HK"] .site * {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang HK', 'Helvetica Neue', "Microsoft YaHei New", STHeiti Light, sans-serif !important;
}

html[lang="zh-TW"] .site * {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Helvetica Neue', "Microsoft YaHei New", STHeiti Light, sans-serif !important;
}

html[lang="zh-CN"] .site * {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', "Microsoft YaHei New", STHeiti Light, sans-serif !important;
}

html[lang="bn-BD"] .site *,
html[lang="hi-IN"] .site *,
html[lang="mr"] .site *,
html[lang="ne-NP"] .site * {
  font-family: Arial, sans-serif !important;
}

html[lang="el"] .site * {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
}

html[lang="gu"] .site * {
  font-family: Arial, sans-serif !important;
}

html[lang="he-IL"] .site * {
  font-family: 'Arial Hebrew', Arial, sans-serif !important;
}

html[lang="ja"] .site * {
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo, "Helvetica Neue", sans-serif !important;
}

html[lang="ko-KR"] .site * {
  font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic', Dotum, sans-serif !important;
}

html[lang="th"] .site * {
  font-family: 'Sukhumvit Set', 'Helvetica Neue', helvetica, arial, sans-serif !important;
}

html[lang="vi"] .site * {
  font-family: 'Libre Franklin', sans-serif !important;
}

html {
  box-sizing: border-box;
}

::-moz-selection {
  background: #bfdcea;
}

::selection {
  background: #bfdcea;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background: #fff;
}

a {
  transition: color 110ms ease-in-out;
  color: #0073aa;
}

a:hover,
a:active {
  color: #005177;
  outline: 0;
  text-decoration: none;
}

a:focus {
  outline: thin;
  outline-style: dotted;
  text-decoration: underline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  margin: 1rem 0;
}

h1:not(.site-title):before,
h2:before {
  background: #767676;
  content: "\\020";
  display: block;
  height: 2px;
  margin: 1rem 0;
  width: 1em;
}

hr {
  background-color: #767676;
  border: 0;
  height: 2px;
}

ul,
ol {
  padding-left: 1rem;
}

ul {
  list-style: disc;
}

ul ul {
  list-style-type: circle;
}

ol {
  list-style: decimal;
}

li {
  line-height: 1.8;
}

li > ul,
li > ol {
  padding-left: 2rem;
}

dt {
  font-weight: bold;
}

dd {
  margin: 0 1rem 1rem;
}

img {
  height: auto;
  max-width: 100%;
  position: relative;
}

figure {
  margin: 0;
}

blockquote {
  border-left: 2px solid #0073aa;
  margin-left: -2rem;
  padding: 0 0 0 1rem;
}

blockquote > p {
  margin: 0 0 1rem;
}

blockquote cite {
  color: #767676;
}

table {
  margin: 0 0 1rem;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  padding: 0.5em;
  border: 1px solid #767676;
  word-break: break-all;
}

.button,
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  transition: background 150ms ease-in-out;
  background: #0073aa;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 0.88889em;
  font-weight: 600;
  line-height: 1.2;
  outline: none;
  padding: 0.76rem 1rem;
  vertical-align: bottom;
}

.button:hover,
button:hover,
input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover {
  cursor: pointer;
}

.button:hover, .button:focus,
button:hover,
button:focus,
input[type="button"]:hover,
input[type="button"]:focus,
input[type="reset"]:hover,
input[type="reset"]:focus,
input[type="submit"]:hover,
input[type="submit"]:focus {
  background: #111;
}

.button:focus,
button:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
input[type="submit"]:focus {
  outline: thin dotted;
  outline-offset: -4px;
}

input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="search"],
input[type="number"],
input[type="tel"],
input[type="range"],
input[type="date"],
input[type="month"],
input[type="week"],
input[type="time"],
input[type="datetime"],
input[type="datetime-local"],
input[type="color"],
textarea {
  -webkit-backface-visibility: hidden;
  background: #fff;
  border: solid 1px #ccc;
  box-sizing: border-box;
  outline: none;
  padding: 0.36rem 0.66rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
input[type="number"]:focus,
input[type="tel"]:focus,
input[type="range"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="week"]:focus,
input[type="time"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="color"]:focus,
textarea:focus {
  border-color: #0073aa;
  outline: thin solid rgba(0, 115, 170, 0.15);
  outline-offset: -4px;
}

textarea {
  box-sizing: border-box;
  display: block;
  width: 100%;
  max-width: 100%;
  resize: vertical;
}

form p {
  margin: 1rem 0;
}

a {
  transition: color 110ms ease-in-out;
  color: #0073aa;
}

a:visited {
  color: #0073aa;
}

a:hover, a:active {
  color: #005177;
  outline: 0;
  text-decoration: none;
}

a:focus {
  outline: thin dotted;
  text-decoration: underline;
}

.main-navigation {
  display: block;
  margin-top: 0.25rem;
}

body.page .main-navigation {
  display: block;
}

.main-navigation > div {
  display: inline;
}

.main-navigation .main-menu {
  display: inline;
  margin: 0;
  padding: 0;
}

.main-navigation .main-menu > li {
  color: #0073aa;
  display: inline;
  position: relative;
}

.main-navigation .main-menu > li > a {
  font-weight: 700;
  color: #0073aa;
  margin-right: 0.5rem;
}

.main-navigation .main-menu > li > a + svg {
  margin-right: 0.5rem;
}

.main-navigation .main-menu > li > a:hover,
.main-navigation .main-menu > li > a:hover + svg {
  color: #005177;
}

.main-navigation .main-menu > li.menu-item-has-children {
  position: inherit;
}

@media only screen and (min-width: 768px) {
  .main-navigation .main-menu > li.menu-item-has-children {
    position: relative;
  }
}

.main-navigation .main-menu > li.menu-item-has-children > a {
  margin-right: 0.125rem;
}

.main-navigation .main-menu > li.menu-item-has-children > a:after,
.main-navigation .main-menu > li.menu-item-has-children .menu-item-has-children > a:after {
  content: "";
  display: none;
}

.main-navigation .main-menu > li.menu-item-has-children .submenu-expand {
  margin-right: 0.5rem;
}

.main-navigation .main-menu > li.menu-item-has-children .submenu-expand.main-menu-more {
  position: relative;
  height: 24px;
  line-height: 1.2;
  width: 24px;
  padding: 0;
  margin-left: 0.5rem;
}

.main-navigation .main-menu > li.menu-item-has-children .submenu-expand.main-menu-more svg {
  height: 24px;
  width: 24px;
  top: -0.125rem;
  vertical-align: text-bottom;
}

.main-navigation .main-menu > li.menu-item-has-children .submenu-expand svg {
  position: relative;
  top: 0.2rem;
}

.main-navigation .main-menu > li:last-child > a,
.main-navigation .main-menu > li:last-child.menu-item-has-children .submenu-expand {
  margin-right: 0;
}

.main-navigation .main-menu .is-hidden {
  display: none;
}

.main-navigation .sub-menu {
  background-color: #0073aa;
  color: #fff;
  list-style: none;
  padding-left: 0;
  display: none;
  float: left;
  position: absolute;
  opacity: 0;
  left: -999px;
  z-index: 99999;
}

@media only screen and (min-width: 768px) {
  .main-navigation .sub-menu {
    width: 100%;
    min-width: -moz-max-content;
    min-width: -webkit-max-content;
    min-width: max-content;
  }
}

.main-navigation .sub-menu > li {
  display: block;
  float: none;
  position: relative;
  word-break: break-word;
}

.main-navigation .sub-menu > li.menu-item-has-children .submenu-expand {
  position: absolute;
  width: calc( 24px + 1rem);
  right: 0;
  top: calc( .125 * 1rem);
  bottom: 0;
  color: white;
  line-height: 1;
  padding: calc( .5 * 1rem);
}

.main-navigation .sub-menu > li.menu-item-has-children .submenu-expand svg {
  top: 0;
}

.main-navigation .sub-menu > li.menu-item-has-children .submenu-expand {
  margin-right: 0;
}

@media only screen and (min-width: 768px) {
  .main-navigation .sub-menu > li.menu-item-has-children .menu-item-has-children > a:after {
    content: "\\203a";
  }
}

.main-navigation .sub-menu > li > a,
.main-navigation .sub-menu > li > .menu-item-link-return {
  color: #fff;
  display: block;
  line-height: 1.2;
  padding: calc( .5 * 1rem) calc( 24px + 1rem) calc( .5 * 1rem) 1rem;
}

.main-navigation .sub-menu > li > a:hover, .main-navigation .sub-menu > li > a:focus,
.main-navigation .sub-menu > li > .menu-item-link-return:hover,
.main-navigation .sub-menu > li > .menu-item-link-return:focus {
  background: #005177;
}

.main-navigation .sub-menu > li > a:hover:after, .main-navigation .sub-menu > li > a:focus:after,
.main-navigation .sub-menu > li > .menu-item-link-return:hover:after,
.main-navigation .sub-menu > li > .menu-item-link-return:focus:after {
  background: #005177;
}

.main-navigation .sub-menu > li.mobile-parent-nav-menu-item {
  display: none;
  font-size: 0.88889em;
  font-weight: normal;
}

.main-navigation .sub-menu > li.mobile-parent-nav-menu-item svg {
  position: relative;
  top: 0.2rem;
  margin-right: calc( .25 * 1rem);
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu {
  display: block;
  left: 0;
  margin-top: 0;
  opacity: 1;
  width: 100%;
  min-width: 100%;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu {
  display: block;
  left: 0;
  margin-top: 0;
  opacity: 1;
  width: 100%;
  min-width: 100%;
}

@media only screen and (min-width: 768px) {
  .main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu {
    display: block;
    margin-top: 0;
    opacity: 1;
    position: absolute;
    left: 0;
    right: auto;
    top: auto;
    bottom: auto;
    height: auto;
    min-width: -moz-max-content;
    min-width: -webkit-max-content;
    min-width: max-content;
    transform: none;
  }
  .main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu {
    display: block;
    margin-top: 0;
    opacity: 1;
    position: absolute;
    left: 0;
    right: auto;
    top: auto;
    bottom: auto;
    height: auto;
    min-width: -moz-max-content;
    min-width: -webkit-max-content;
    min-width: max-content;
    transform: none;
  }
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu.hidden-links {
  left: 0;
  width: 100%;
  display: table;
  position: absolute;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu.hidden-links {
  left: 0;
  width: 100%;
  display: table;
  position: absolute;
}

@media only screen and (min-width: 768px) {
  .main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu.hidden-links {
    right: 0;
    left: auto;
    display: block;
    width: max-content;
  }
  .main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu.hidden-links {
    right: 0;
    left: auto;
    display: block;
    width: max-content;
  }
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu {
  display: block;
  margin-top: inherit;
  position: relative;
  width: 100%;
  max-width: -moz-max-content;
  max-width: -webkit-max-content;
  max-width: max-content;
  left: 0;
  opacity: 1;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu {
  display: block;
  margin-top: inherit;
  position: relative;
  width: 100%;
  max-width: -moz-max-content;
  max-width: -webkit-max-content;
  max-width: max-content;
  left: 0;
  opacity: 1;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu li > a:before {
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-weight: normal;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu li > a:before {
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-weight: normal;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu > li > a:before {
  content: "\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu > li > a:before {
  content: "\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus)[focus-within] > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):focus-within > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus {
  display: block;
  left: 0;
  margin-top: 0;
  opacity: 1;
  width: 100%;
  min-width: 100%;
}

@media only screen and (min-width: 768px) {
  .main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu,
  .main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu,
  .main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover,
  .main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus {
    display: block;
    margin-top: 0;
    opacity: 1;
    position: absolute;
    left: 0;
    right: auto;
    top: auto;
    bottom: auto;
    height: auto;
    min-width: -moz-max-content;
    min-width: -webkit-max-content;
    min-width: max-content;
    transform: none;
  }
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu.hidden-links,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu.hidden-links,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover.hidden-links,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus.hidden-links {
  left: 0;
  width: 100%;
  display: table;
  position: absolute;
}

@media only screen and (min-width: 768px) {
  .main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu.hidden-links,
  .main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu.hidden-links,
  .main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover.hidden-links,
  .main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus.hidden-links {
    right: 0;
    left: auto;
    display: block;
    width: max-content;
  }
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .submenu-expand,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .submenu-expand,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .submenu-expand,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .submenu-expand {
  display: none;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu {
  display: block;
  margin-top: inherit;
  position: relative;
  width: 100%;
  left: 0;
  opacity: 1;
}

@media only screen and (min-width: 768px) {
  .main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu,
  .main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu,
  .main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu,
  .main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu {
    max-width: -moz-max-content;
    max-width: -webkit-max-content;
    max-width: max-content;
  }
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu li > a:before {
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-weight: normal;
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu > li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu > li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu > li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu > li > a:before {
  content: "\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children:not(.focus):hover > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus):focus > .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:hover .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before,
.main-navigation .main-menu .menu-item-has-children:not(.focus) .sub-menu:focus .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu li > a:before {
  content: "\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0\\2013\\00a0";
}

.main-navigation .main-menu .menu-item-has-children.focus .sub-menu {
  animation: fade_in 0.1s forwards;
}

.main-navigation .main-menu .menu-item-has-children.focus .sub-menu .submenu-expand .svg-icon {
  transform: rotate(270deg);
}

.main-navigation .main-menu .menu-item-has-children.focus .sub-menu .sub-menu {
  opacity: 0;
  position: absolute;
  z-index: 0;
  transform: translateX(-100%);
}

.main-navigation .main-menu .menu-item-has-children.focus .sub-menu li:hover,
.main-navigation .main-menu .menu-item-has-children.focus .sub-menu li:focus,
.main-navigation .main-menu .menu-item-has-children.focus .sub-menu li > a:hover,
.main-navigation .main-menu .menu-item-has-children.focus .sub-menu li > a:focus {
  background-color: transparent;
}

.main-navigation .main-menu .menu-item-has-children.focus .sub-menu.expanded-true {
  display: table;
  margin-top: 0;
  opacity: 1;
  padding-left: 0;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100000;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  transform: translateX(100%);
  animation: slide_in_right 0.3s forwards;
}

.main-navigation .main-menu .menu-item-has-children.focus .sub-menu.expanded-true > .mobile-parent-nav-menu-item {
  display: block;
}

.admin-bar .main-navigation .main-menu .menu-item-has-children.focus .sub-menu.expanded-true {
  top: 46px;
  height: calc( 100vh - 46px);
}

.admin-bar .main-navigation .main-menu .menu-item-has-children.focus .sub-menu.expanded-true .sub-menu.expanded-true {
  top: 0;
}

@media only screen and (min-width: 782px) {
  .admin-bar .main-navigation .main-menu .menu-item-has-children.focus .sub-menu.expanded-true {
    top: 32px;
    height: calc( 100vh - 32px);
  }
  .admin-bar .main-navigation .main-menu .menu-item-has-children.focus .sub-menu.expanded-true .sub-menu.expanded-true {
    top: 0;
  }
}

@keyframes slide_in_right {
  100% {
    transform: translateX(0%);
  }
}

@keyframes fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.social-navigation {
  margin-top: calc(1rem / 2);
  text-align: left;
}

.social-navigation ul.social-links-menu {
  content: "";
  table-layout: fixed;
  margin: 0;
  padding: 0;
}

.social-navigation ul.social-links-menu li {
  display: inline-block;
  vertical-align: bottom;
  vertical-align: -webkit-baseline-middle;
  list-style: none;
}

.social-navigation ul.social-links-menu li a {
  border-bottom: 1px solid transparent;
  display: block;
  color: #111;
  margin-bottom: -1px;
  transition: opacity 110ms ease-in-out;
}

.social-navigation ul.social-links-menu li a:hover, .social-navigation ul.social-links-menu li a:active {
  color: #111;
  opacity: 0.6;
}

.social-navigation ul.social-links-menu li a:focus {
  color: #111;
  opacity: 1;
  border-bottom: 1px solid #111;
}

.social-navigation ul.social-links-menu li a svg {
  display: block;
  width: 32px;
  height: 32px;
}

.social-navigation ul.social-links-menu li a svg#ui-icon-link {
  transform: rotate(-45deg);
}

.footer-navigation {
  display: inline;
}

.footer-navigation > div {
  display: inline;
}

.footer-navigation .footer-menu {
  display: inline;
  padding-left: 0;
}

.footer-navigation .footer-menu li {
  display: inline;
  margin-right: 1rem;
}

.post-navigation {
  margin: calc(3 * 1rem) 0;
}

@media only screen and (min-width: 768px) {
  .post-navigation {
    margin: calc(3 * 1rem) calc(10% + 60px);
    max-width: calc(6 * (100vw / 12));
  }
}

@media only screen and (min-width: 1168px) {
  .post-navigation {
    margin: calc(3 * 1rem) 0;
    max-width: 100%;
  }
}

.post-navigation .nav-links {
  margin: 0 1rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .post-navigation .nav-links {
    margin: 0;
  }
}

@media only screen and (min-width: 1168px) {
  .post-navigation .nav-links {
    flex-direction: row;
    margin: 0 calc(10% + 60px);
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

.post-navigation .nav-links a .meta-nav {
  color: #767676;
  user-select: none;
}

.post-navigation .nav-links a .meta-nav:before, .post-navigation .nav-links a .meta-nav:after {
  display: none;
  content: "—";
  width: 2em;
  color: #767676;
  height: 1em;
}

.post-navigation .nav-links a .post-title {
  hyphens: auto;
}

.post-navigation .nav-links a:hover {
  color: #005177;
}

@media only screen and (min-width: 1168px) {
  .post-navigation .nav-links .nav-previous,
  .post-navigation .nav-links .nav-next {
    min-width: calc(50% - 2 * 1rem);
  }
}

.post-navigation .nav-links .nav-previous {
  order: 2;
}

@media only screen and (min-width: 1168px) {
  .post-navigation .nav-links .nav-previous {
    order: 1;
  }
}

.post-navigation .nav-links .nav-previous + .nav-next {
  margin-bottom: 1rem;
}

.post-navigation .nav-links .nav-previous .meta-nav:before {
  display: inline;
}

.post-navigation .nav-links .nav-next {
  order: 1;
}

@media only screen and (min-width: 1168px) {
  .post-navigation .nav-links .nav-next {
    order: 2;
    padding-left: 1rem;
  }
}

.post-navigation .nav-links .nav-next .meta-nav:after {
  display: inline;
}

.pagination .nav-links {
  display: flex;
  flex-wrap: wrap;
  padding: 0 calc(.5 * 1rem);
}

.pagination .nav-links > * {
  padding: calc(.5 * 1rem);
}

.pagination .nav-links > *.dots, .pagination .nav-links > *.prev {
  padding-left: 0;
}

.pagination .nav-links > *.dots, .pagination .nav-links > *.next {
  padding-right: 0;
}

.pagination .nav-links .nav-next-text,
.pagination .nav-links .nav-prev-text {
  display: none;
}

@media only screen and (min-width: 768px) {
  .pagination .nav-links {
    margin-left: calc(10% + 60px);
    padding: 0;
  }
  .pagination .nav-links .prev > *,
  .pagination .nav-links .next > * {
    display: inline-block;
    vertical-align: text-bottom;
  }
  .pagination .nav-links > * {
    padding: 1rem;
  }
}

.comment-navigation .nav-links {
  display: flex;
  flex-direction: row;
}

.comment-navigation .nav-previous,
.comment-navigation .nav-next {
  min-width: 50%;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
}

.comment-navigation .nav-previous .secondary-text,
.comment-navigation .nav-next .secondary-text {
  display: none;
}

@media only screen and (min-width: 768px) {
  .comment-navigation .nav-previous .secondary-text,
  .comment-navigation .nav-next .secondary-text {
    display: inline;
  }
}

.comment-navigation .nav-previous svg,
.comment-navigation .nav-next svg {
  vertical-align: middle;
  position: relative;
  margin: 0 -0.35em;
  top: -1px;
}

.comment-navigation .nav-next {
  text-align: right;
}

.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}

.screen-reader-text:focus {
  background-color: #f1f1f1;
  border-radius: 3px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  clip-path: none;
  color: #21759b;
  display: block;
  font-size: 0.875rem;
  font-weight: bold;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
}

#content[tabindex="-1"]:focus {
  outline: 0;
}

.alignleft {
  float: left;
  margin-right: 1rem;
}

.alignright {
  float: right;
  margin-left: 1rem;
}

.aligncenter {
  clear: both;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.clear:before,
.clear:after,
.entry-content:before,
.entry-content:after,
.comment-content:before,
.comment-content:after,
.site-header:before,
.site-header:after,
.site-content:before,
.site-content:after,
.site-footer:before,
.site-footer:after {
  content: "";
  display: table;
  table-layout: fixed;
}

.clear:after,
.entry-content:after,
.comment-content:after,
.site-header:after,
.site-content:after,
.site-footer:after {
  clear: both;
}

#page {
  width: 100%;
}

.site-content {
  overflow: hidden;
}

.site-header {
  padding: 1em;
}

.site-header.featured-image {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
}

.site-header.featured-image .site-branding-container {
  margin-bottom: auto;
}

@media only screen and (min-width: 768px) {
  .site-header {
    margin: 0;
    padding: 3rem 0;
  }
  .site-header.featured-image {
    min-height: 100vh;
    margin-bottom: 3rem;
  }
}

.site-branding {
  color: #767676;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .site-branding {
    margin: 0 calc(10% + 60px);
  }
}

.site-logo {
  position: relative;
  z-index: 999;
  margin-bottom: calc(.66 * 1rem);
}

@media only screen and (min-width: 768px) {
  .site-logo {
    margin-bottom: 0;
    position: absolute;
    right: calc(100% + (1.25 * 1rem));
    top: 4px;
    z-index: 999;
  }
}

.site-logo .custom-logo-link {
  border-radius: 100%;
  box-sizing: content-box;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  display: block;
  width: 32px;
  height: 32px;
  overflow: hidden;
  transition: box-shadow 200ms ease-in-out;
}

.site-logo .custom-logo-link .custom-logo {
  min-height: inherit;
}

.site-logo .custom-logo-link:hover, .site-logo .custom-logo-link:active, .site-logo .custom-logo-link:focus {
  box-shadow: 0 0 0 2px black;
}

@media only screen and (min-width: 768px) {
  .site-logo .custom-logo-link {
    width: 64px;
    height: 64px;
  }
}

.site-title {
  margin: auto;
  display: inline;
}

.site-title a:link,
.site-title a:visited {
  color: #111;
}

.featured-image .site-title {
  margin: 0;
}

@media only screen and (min-width: 768px) {
  .featured-image .site-title {
    display: inline-block;
  }
}

.site-title + .main-navigation {
  display: block;
}

.site-title a {
  color: inherit;
}

.site-title a:hover {
  color: #4a4a4a;
}

@media only screen and (min-width: 768px) {
  .site-title {
    display: inline;
  }
}

.site-title:not(:empty) + .site-description:not(:empty):before {
  content: "\\2014";
  margin: 0 .2em;
}

.site-description {
  display: inline;
  color: #767676;
  font-weight: normal;
  margin: 0;
}

.site-header.featured-image {
  overflow: hidden;
  position: relative;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.site-header.featured-image .site-branding .site-title,
.site-header.featured-image .site-branding .site-description,
.site-header.featured-image .main-navigation a:after,
.site-header.featured-image .main-navigation .main-menu > li.menu-item-has-children:after,
.site-header.featured-image .main-navigation li,
.site-header.featured-image .social-navigation li,
.site-header.featured-image .entry-meta,
.site-header.featured-image .entry-title {
  color: #fff;
}

.site-header.featured-image .main-navigation a,
.site-header.featured-image .main-navigation a + svg,
.site-header.featured-image .social-navigation a,
.site-header.featured-image .site-title a,
.site-header.featured-image .site-featured-image a {
  color: #fff;
  transition: opacity 110ms ease-in-out;
}

.site-header.featured-image .main-navigation a:hover, .site-header.featured-image .main-navigation a:active,
.site-header.featured-image .main-navigation a:hover + svg,
.site-header.featured-image .main-navigation a:active + svg,
.site-header.featured-image .main-navigation a + svg:hover,
.site-header.featured-image .main-navigation a + svg:active,
.site-header.featured-image .main-navigation a + svg:hover + svg,
.site-header.featured-image .main-navigation a + svg:active + svg,
.site-header.featured-image .social-navigation a:hover,
.site-header.featured-image .social-navigation a:active,
.site-header.featured-image .social-navigation a:hover + svg,
.site-header.featured-image .social-navigation a:active + svg,
.site-header.featured-image .site-title a:hover,
.site-header.featured-image .site-title a:active,
.site-header.featured-image .site-title a:hover + svg,
.site-header.featured-image .site-title a:active + svg,
.site-header.featured-image .site-featured-image a:hover,
.site-header.featured-image .site-featured-image a:active,
.site-header.featured-image .site-featured-image a:hover + svg,
.site-header.featured-image .site-featured-image a:active + svg {
  color: #fff;
  opacity: 0.6;
}

.site-header.featured-image .main-navigation a:focus,
.site-header.featured-image .main-navigation a:focus + svg,
.site-header.featured-image .main-navigation a + svg:focus,
.site-header.featured-image .main-navigation a + svg:focus + svg,
.site-header.featured-image .social-navigation a:focus,
.site-header.featured-image .social-navigation a:focus + svg,
.site-header.featured-image .site-title a:focus,
.site-header.featured-image .site-title a:focus + svg,
.site-header.featured-image .site-featured-image a:focus,
.site-header.featured-image .site-featured-image a:focus + svg {
  color: #fff;
}

.site-header.featured-image .social-navigation a:focus {
  color: #fff;
  opacity: 1;
  border-bottom: 1px solid #fff;
}

.site-header.featured-image .social-navigation svg,
.site-header.featured-image .site-featured-image svg {
  -webkit-filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
}

.site-header.featured-image .site-featured-image {

}

.site-header.featured-image .site-featured-image .post-thumbnail img {
  height: auto;
  left: 50%;
  max-width: 1000%;
  min-height: 100%;
  min-width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: auto;
  z-index: 1;
}

@supports (object-fit: cover) {
  .site-header.featured-image .site-featured-image .post-thumbnail img {
    height: 100%;
    left: 0;
    object-fit: cover;
    top: 0;
    transform: none;
    width: 100%;
  }
}

.image-filters-enabled .site-header.featured-image .site-featured-image .post-thumbnail img {
  filter: grayscale(100%);
}

.site-header.featured-image .site-featured-image .entry-header {
  margin-top: calc( 4 * 1rem);
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
}

@media only screen and (min-width: 768px) {
  .site-header.featured-image .site-featured-image .entry-header {
    margin-left: calc(10% + 60px);
    margin-right: calc(10% + 60px);
  }
}

.site-header.featured-image .site-featured-image .entry-header .entry-title:before {
  background: #fff;
}

.site-header.featured-image .site-featured-image .entry-header .entry-meta {
  font-weight: 500;
}

.site-header.featured-image .site-featured-image .entry-header .entry-meta > span {
  margin-right: 1rem;
  display: inline-block;
}

.site-header.featured-image .site-featured-image .entry-header .entry-meta > span:last-child {
  margin-right: 0;
}

.site-header.featured-image .site-featured-image .entry-header .entry-meta a {
  transition: color 110ms ease-in-out;
  color: currentColor;
}

.site-header.featured-image .site-featured-image .entry-header .entry-meta a:hover {
  text-decoration: none;
}

.site-header.featured-image .site-featured-image .entry-header .entry-meta .svg-icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5em;
}

.site-header.featured-image .site-featured-image .entry-header .entry-meta .discussion-avatar-list {
  display: none;
}

@media only screen and (min-width: 768px) {
  .site-header.featured-image .site-featured-image .entry-header.has-discussion .entry-meta {
    display: flex;
    position: relative;
  }
  .site-header.featured-image .site-featured-image .entry-header.has-discussion .entry-title {
    padding-right: calc(1 * (100vw / 12) + 1rem);
  }
  .site-header.featured-image .site-featured-image .entry-header.has-discussion .entry-meta .comment-count {
    position: absolute;
    right: 0;
  }
  .site-header.featured-image .site-featured-image .entry-header.has-discussion .entry-meta .discussion-avatar-list {
    display: block;
    position: absolute;
    bottom: 100%;
  }
}

.site-header.featured-image .custom-logo-link {
  background: #fff;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
}

.site-header.featured-image .custom-logo-link:hover, .site-header.featured-image .custom-logo-link:active, .site-header.featured-image .custom-logo-link:focus {
  box-shadow: 0 0 0 2px white;
}

.site-header.featured-image .site-branding {
  position: relative;
  z-index: 10;
}

.site-header.featured-image .site-featured-image .entry-header {
  position: relative;
  z-index: 9;
}

.site-header.featured-image .site-branding-container:after,
.site-header.featured-image .site-featured-image:before,
.site-header.featured-image .site-featured-image:after, .site-header.featured-image:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  content: "\\020";
  width: 100%;
  height: 100%;
}

.image-filters-enabled .site-header.featured-image .site-featured-image:before {
  background: #0073aa;
  mix-blend-mode: screen;
  opacity: 0.1;
}

.site-header.featured-image .site-featured-image:after {
  background: #000;
  mix-blend-mode: multiply;
  opacity: .7;
}

.image-filters-enabled .site-header.featured-image .site-featured-image:after {
  background: #0073aa;
  opacity: .8;
  z-index: 3;
}

@supports (mix-blend-mode: multiply) {
  .image-filters-enabled .site-header.featured-image .site-featured-image:after {
    opacity: 1;
  }
}

.image-filters-enabled .site-header.featured-image .site-branding-container:after {
  background: rgba(0, 0, 0, 0.35);
  mix-blend-mode: overlay;
  opacity: 0.5;
  z-index: 4;
}

@supports (mix-blend-mode: overlay) {
  .image-filters-enabled .site-header.featured-image .site-branding-container:after {
    background: rgba(255, 255, 255, 0.35);
  }
}

.site-header.featured-image:after {
  background: #000;
  transition: opacity 1200ms ease-in-out;
  opacity: 0.7;
  z-index: 5;
}

.image-filters-enabled .site-header.featured-image:after {
  background: #000e14;
  opacity: 0.38;
}

@media only screen and (min-width: 768px) {
  .image-filters-enabled .site-header.featured-image:after {
    opacity: 0.18;
  }
}

.site-header.featured-image ::-moz-selection {
  background: rgba(255, 255, 255, 0.17);
}

.site-header.featured-image ::selection {
  background: rgba(255, 255, 255, 0.17);
}

.sticky {
  display: block;
}

.sticky-post {
  background: #0073aa;
  color: #fff;
  display: inline-block;
  font-weight: bold;
  line-height: 1;
  padding: .25rem;
  position: absolute;
  text-transform: uppercase;
  top: -1rem;
  z-index: 1;
}

.updated:not(.published) {
  display: none;
}

.page-links {
  clear: both;
  margin: 0 0 calc(1.5 * 1rem);
}

.entry {
  margin-top: calc(6 * 1rem);
}

.entry:first-of-type {
  margin-top: 0;
}

.entry .entry-header {
  margin: calc(3 * 1rem) 1rem 1rem;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .entry .entry-header {
    margin: calc(3 * 1rem) calc(10% + 60px) 1rem;
  }
}

.entry .entry-title {
  margin: 0;
}

.entry .entry-title:before {
  background: #767676;
  content: "\\020";
  display: block;
  height: 2px;
  margin: 1rem 0;
  width: 1em;
}

.entry .entry-title a {
  color: inherit;
}

.entry .entry-title a:hover {
  color: #4a4a4a;
}

.entry .entry-meta,
.entry .entry-footer {
  color: #767676;
  font-weight: 500;
}

.entry .entry-meta > span,
.entry .entry-footer > span {
  margin-right: 1rem;
  display: inline-block;
}

.entry .entry-meta > span:last-child,
.entry .entry-footer > span:last-child {
  margin-right: 0;
}

.entry .entry-meta a,
.entry .entry-footer a {
  transition: color 110ms ease-in-out;
  color: currentColor;
}

.entry .entry-meta a:hover,
.entry .entry-footer a:hover {
  text-decoration: none;
  color: #0073aa;
}

.entry .entry-meta .svg-icon,
.entry .entry-footer .svg-icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5em;
}

.entry .entry-meta {
  margin: 1rem 0;
}

.entry .entry-footer {
  margin: calc(2 * 1rem) 1rem 1rem;
}

@media only screen and (min-width: 768px) {
  .entry .entry-footer {
    margin: 1rem calc(10% + 60px) calc(3 * 1rem);
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-footer {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

.entry .post-thumbnail {
  margin: 1rem;
}

@media only screen and (min-width: 768px) {
  .entry .post-thumbnail {
    margin: 1rem calc(10% + 60px);
  }
}

.entry .post-thumbnail:focus {
  outline: none;
}

.entry .post-thumbnail .post-thumbnail-inner {
  display: block;
}

.entry .post-thumbnail .post-thumbnail-inner img {
  position: relative;
  display: block;
  width: 100%;
}

.image-filters-enabled .entry .post-thumbnail {
  position: relative;
  display: block;
}

.image-filters-enabled .entry .post-thumbnail .post-thumbnail-inner {
  filter: grayscale(100%);
}

.image-filters-enabled .entry .post-thumbnail .post-thumbnail-inner:after {
  background: rgba(0, 0, 0, 0.35);
  content: "";
  display: block;
  height: 100%;
  opacity: .5;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;
}

@supports (mix-blend-mode: multiply) {
  .image-filters-enabled .entry .post-thumbnail .post-thumbnail-inner:after {
    display: none;
  }
}

.image-filters-enabled .entry .post-thumbnail:before, .image-filters-enabled .entry .post-thumbnail:after {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "\\020";
  pointer-events: none;
}

.image-filters-enabled .entry .post-thumbnail:before {
  background: #0073aa;
  mix-blend-mode: screen;
  opacity: 0.1;
  z-index: 2;
}

.image-filters-enabled .entry .post-thumbnail:after {
  background: #0073aa;
  mix-blend-mode: multiply;
  opacity: .8;
  z-index: 3;
}

@supports (mix-blend-mode: multiply) {
  .image-filters-enabled .entry .post-thumbnail:after {
    opacity: 1;
  }
}

.entry .entry-content,
.entry .entry-summary {
  max-width: calc(100% - (2 * 1rem));
  margin: 0 1rem;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content,
  .entry .entry-summary {
    max-width: 80%;
    margin: 0 10%;
    padding: 0 60px;
  }
}

.entry .entry-content p {
  word-wrap: break-word;
}

.entry .entry-content .more-link {
  transition: color 110ms ease-in-out;
  display: inline;
  color: inherit;
}

.entry .entry-content .more-link:after {
  content: "\\02192";
  margin-left: 0.5em;
}

.entry .entry-content .more-link:hover {
  color: #0073aa;
  text-decoration: none;
}

.entry .entry-content a {
  text-decoration: underline;
}

.entry .entry-content a:hover {
  text-decoration: none;
}

.entry .entry-content > iframe[style] {
  margin: 32px 0 !important;
  max-width: 100% !important;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > iframe[style] {
    max-width: calc(8 * (100vw / 12) - 28px) !important;
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content > iframe[style] {
    max-width: calc(6 * (100vw / 12) - 28px) !important;
  }
}

.entry .entry-content .page-links a {
  margin: calc(0.5 * 1rem);
  text-decoration: none;
}

.entry .entry-content .wp-audio-shortcode {
  max-width: calc(100vw - (2 * 1rem));
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-audio-shortcode {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-audio-shortcode {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

.author-bio {
  margin: calc(2 * 1rem) 1rem 1rem;
}

@media only screen and (min-width: 768px) {
  .author-bio {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .author-bio {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .author-bio {
    margin: calc(3 * 1rem) calc(10% + 60px);
  }
}

@media only screen and (min-width: 1168px) {
  .author-bio {
    margin: calc(3 * 1rem) calc(10% + 60px);
  }
}

.author-bio .author-title {
  display: inline;
}

.author-bio .author-title:before {
  background: #767676;
  content: "\\020";
  display: block;
  height: 2px;
  margin: 1rem 0;
  width: 1em;
}

.author-bio .author-description {
  display: inline;
  color: #767676;
  font-size: 1.125em;
  line-height: 1.2;
}

.author-bio .author-description .author-link {
  display: inline-block;
}

.author-bio .author-description .author-link:hover {
  color: #005177;
  text-decoration: none;
}

.comment-content a {
  word-wrap: break-word;
}

.bypostauthor {
  display: block;
}

.comments-area {
  margin: calc(2 * 1rem) 1rem;
}

@media only screen and (min-width: 768px) {
  .comments-area {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .comments-area {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .comments-area {
    margin: calc(3 * 1rem) calc(10% + 60px);
  }
}

.comments-area > * {
  margin-top: calc(2 * 1rem);
  margin-bottom: calc(2 * 1rem);
}

@media only screen and (min-width: 768px) {
  .comments-area > * {
    margin-top: calc(3 * 1rem);
    margin-bottom: calc(3 * 1rem);
  }
}

.entry + .comments-area {
  margin-top: calc(3 * 1rem);
}

@media only screen and (min-width: 768px) {
  .comments-area .comments-title-wrap {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
  }
}

.comments-area .comments-title-wrap .comments-title {
  margin: 0;
}

.comments-area .comments-title-wrap .comments-title:before {
  background: #767676;
  content: "\\020";
  display: block;
  height: 2px;
  margin: 1rem 0;
  width: 1em;
}

@media only screen and (min-width: 768px) {
  .comments-area .comments-title-wrap .comments-title {
    flex: 1 0 calc(3 * (100vw / 12));
  }
}

@media only screen and (min-width: 768px) {
  .comments-area .comments-title-wrap .discussion-meta {
    flex: 0 0 calc(2 * (100vw / 12));
    margin-left: 1rem;
  }
}

#comment {
  max-width: 100%;
  box-sizing: border-box;
}

#respond {
  position: relative;
}

#respond .comment-user-avatar {
  margin: 1rem 0 -1rem;
}

#respond .comment .comment-form {
  padding-left: 0;
}

#respond > small {
  display: block;
  font-size: 22px;
  position: absolute;
  left: calc(1rem + 100%);
  top: calc(-3.5 * 1rem);
  width: calc(100vw / 12);
}

#comments > .comments-title:last-child {
  display: none;
}

.comment-form-flex {
  display: flex;
  flex-direction: column;
}

.comment-form-flex .comments-title {
  display: none;
  margin: 0;
  order: 1;
}

.comment-form-flex #respond {
  order: 2;
}

.comment-form-flex #respond + .comments-title {
  display: block;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment-list .children {
  margin: 0;
  padding: 0 0 0 1rem;
}

.comment-list .pingback .comment-body,
.comment-list .trackback .comment-body {
  color: #767676;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 0.71111em;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.comment-list .pingback .comment-body a:not(.comment-edit-link),
.comment-list .trackback .comment-body a:not(.comment-edit-link) {
  font-weight: bold;
  font-size: 19.55556px;
  line-height: 1.5;
  padding-right: 0.5rem;
  display: block;
}

.comment-list .pingback .comment-body .comment-edit-link,
.comment-list .trackback .comment-body .comment-edit-link {
  color: #767676;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
}

#respond + .comment-reply {
  display: none;
}

.comment-reply .comment-reply-link {
  display: inline-block;
}

.comment {
  list-style: none;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .comment {
    padding-left: calc(.5 * (1rem + calc(100vw / 12 )));
  }
  .comment.depth-1,
  .comment .children {
    padding-left: 0;
  }
  .comment.depth-1 {
    margin-left: calc(3.25 * 1rem);
  }
}

.comment .comment-body {
  margin: calc(2 * 1rem) 0 0;
}

.comment .comment-meta {
  position: relative;
}

.comment .comment-author .avatar {
  float: left;
  margin-right: 1rem;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .comment .comment-author .avatar {
    float: inherit;
    margin-right: inherit;
    position: absolute;
    top: 0;
    right: calc(100% + 1rem);
  }
}

.comment .comment-author .fn {
  position: relative;
  display: block;
}

.comment .comment-author .fn a {
  color: inherit;
}

.comment .comment-author .fn a:hover {
  color: #005177;
}

.comment .comment-author .post-author-badge {
  border-radius: 100%;
  display: block;
  height: 18px;
  position: absolute;
  background: #008fd3;
  right: calc(100% - 2.5rem);
  top: -3px;
  width: 18px;
}

@media only screen and (min-width: 768px) {
  .comment .comment-author .post-author-badge {
    right: calc(100% + 0.75rem);
  }
}

.comment .comment-author .post-author-badge svg {
  width: inherit;
  height: inherit;
  display: block;
  fill: white;
  transform: scale(0.875);
}

.comment .comment-metadata > a,
.comment .comment-metadata .comment-edit-link {
  display: inline;
  font-weight: 500;
  color: #767676;
  vertical-align: baseline;
}

.comment .comment-metadata > a time,
.comment .comment-metadata .comment-edit-link time {
  vertical-align: baseline;
}

.comment .comment-metadata > a:hover,
.comment .comment-metadata .comment-edit-link:hover {
  color: #005177;
  text-decoration: none;
}

.comment .comment-metadata > * {
  display: inline-block;
}

.comment .comment-metadata .edit-link-sep {
  color: #767676;
  margin: 0 0.2em;
  vertical-align: baseline;
}

.comment .comment-metadata .edit-link {
  color: #767676;
}

.comment .comment-metadata .edit-link svg {
  transform: scale(0.8);
  vertical-align: baseline;
  margin-right: 0.1em;
}

.comment .comment-metadata .comment-edit-link {
  position: relative;
  padding-left: 1rem;
  margin-left: -1rem;
  z-index: 1;
}

.comment .comment-metadata .comment-edit-link:hover {
  color: #0073aa;
}

.comment .comment-content {
  margin: 1rem 0;
}

@media only screen and (min-width: 1168px) {
  .comment .comment-content {
    padding-right: 1rem;
  }
}
.comment .comment-content > *:last-child {
  margin-bottom: 0;
}

.comment .comment-content blockquote {
  margin-left: 0;
}

.comment .comment-content a {
  text-decoration: underline;
}

.comment .comment-content a:hover {
  text-decoration: none;
}

.comment-reply-link,
#cancel-comment-reply-link {
  font-weight: 500;
}

.comment-reply-link:hover,
#cancel-comment-reply-link:hover {
  color: #005177;
}

.discussion-avatar-list {
  content: "";
  display: table;
  table-layout: fixed;
  margin: 0;
  padding: 0;
}

.discussion-avatar-list li {
  position: relative;
  list-style: none;
  margin: 0 -8px 0 0;
  padding: 0;
  float: left;
}

.discussion-avatar-list .comment-user-avatar img {
  height: calc(1.5 * 1rem);
  width: calc(1.5 * 1rem);
}

.discussion-meta .discussion-meta-info {
  margin: 0;
}

.discussion-meta .discussion-meta-info .svg-icon {
  vertical-align: middle;
  fill: currentColor;
  transform: scale(0.6) scaleX(-1) translateY(-0.1em);
  margin-left: -0.25rem;
}

.comment-form .comment-notes,
.comment-form label {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 0.71111em;
  color: #767676;
}

@media only screen and (min-width: 768px) {
  .comment-form .comment-form-author,
  .comment-form .comment-form-email {
    width: calc(50% - 0.5rem);
    float: left;
  }
}

@media only screen and (min-width: 768px) {
  .comment-form .comment-form-email {
    margin-left: 1rem;
  }
}

.comment-form input[name="author"],
.comment-form input[name="email"],
.comment-form input[name="url"] {
  display: block;
  width: 100%;
}

.archive .page-header,
.search .page-header,
.error404 .page-header {
  margin: 1rem 1rem calc(3 * 1rem);
}

@media only screen and (min-width: 768px) {
  .archive .page-header,
  .search .page-header,
  .error404 .page-header {
    margin: 0 calc(10% + 60px) calc(10% + 60px);
  }
}

.archive .page-header .page-title,
.search .page-header .page-title,
.error404 .page-header .page-title {
  color: #767676;
  display: inline;
  letter-spacing: normal;
}

.archive .page-header .page-title:before,
.search .page-header .page-title:before,
.error404 .page-header .page-title:before {
  display: none;
}

.archive .page-header .search-term,
.archive .page-header .page-description,
.search .page-header .search-term,
.search .page-header .page-description,
.error404 .page-header .search-term,
.error404 .page-header .page-description {
  display: inherit;
  clear: both;
}

.archive .page-header .search-term:after,
.archive .page-header .page-description:after,
.search .page-header .search-term:after,
.search .page-header .page-description:after,
.error404 .page-header .search-term:after,
.error404 .page-header .page-description:after {
  content: ".";
  font-weight: bold;
  color: #767676;
}

.archive .page-header .page-description {
  display: block;
  color: #111;
  font-size: 1em;
}

@media only screen and (min-width: 768px) {
  .hfeed .entry .entry-header {
    margin: calc(1rem) calc(10% + 60px) calc(1rem / 2);
  }
}

.error-404.not-found .page-content,
.no-results.not-found .page-content {
  margin: calc(3 * 1rem) 1rem;
}

@media only screen and (min-width: 768px) {
  .error-404.not-found .page-content,
  .no-results.not-found .page-content {
    margin: calc(3 * 1rem) calc(10% + 60px) calc(1rem / 2);
  }
}

.error-404.not-found .search-submit,
.no-results.not-found .search-submit {
  vertical-align: middle;
  margin: 1rem 0;
}

.error-404.not-found .search-field,
.no-results.not-found .search-field {
  width: 100%;
}

#colophon .widget-area,
#colophon .site-info {
  margin: calc(2 * 1rem) 1rem;
}

@media only screen and (min-width: 768px) {
  #colophon .widget-area,
  #colophon .site-info {
    margin: calc(3 * 1rem) calc(10% + 60px);
  }
}

#colophon .widget-area .imprint,
#colophon .site-info .imprint {
  margin-right: 1rem;
}

#colophon .site-info a {
  color: inherit;
}

#colophon .site-info a:hover {
  text-decoration: none;
  color: #0073aa;
}

#colophon .widget-column {
  display: flex;
  flex-wrap: wrap;
}

#colophon .widget-column .widget {
  width: 100%;
}

@media only screen and (min-width: 1168px) {
  #colophon .widget-column .widget {
    margin-right: calc(3 * 1rem);
    width: calc(50% - (3 * 1rem));
  }
}

#colophon .site-info {
  color: #767676;
}

.widget {
  margin: 0 0 1rem;
}

.widget select {
  max-width: 100%;
}

.widget a {
  color: #0073aa;
}

.widget a:hover {
  color: #005177;
}

.widget_archive ul,
.widget_nav_menu ul,
.widget_meta ul,
.widget_recent_entries ul,
.widget_rss ul {
  padding: 0;
  list-style: none;
}

.widget_archive ul li,
.widget_nav_menu ul li,
.widget_meta ul li,
.widget_recent_entries ul li,
.widget_rss ul li {
  color: #767676;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: calc(22px * 1.125);
  font-weight: bold;
  line-height: 1.2;
}

.widget_archive ul li:not(.menu-item-has-children),
.widget_nav_menu ul li:not(.menu-item-has-children),
.widget_meta ul li:not(.menu-item-has-children),
.widget_recent_entries ul li:not(.menu-item-has-children),
.widget_rss ul li:not(.menu-item-has-children) {
  padding-bottom: 0.75rem;
}

.widget_archive ul li ul,
.widget_nav_menu ul li ul,
.widget_meta ul li ul,
.widget_recent_entries ul li ul,
.widget_rss ul li ul {
  padding-left: 1rem;
}

.widget_archive ul.sub-menu,
.widget_nav_menu ul.sub-menu,
.widget_meta ul.sub-menu,
.widget_recent_entries ul.sub-menu,
.widget_rss ul.sub-menu {
  padding-top: 0.75rem;
}

.widget_search .search-submit {
  display: block;
  margin-top: 1rem;
}

.widget_calendar .calendar_wrap {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.widget_calendar .calendar_wrap table td,
.widget_calendar .calendar_wrap table th {
  border: none;
}

.widget_calendar .calendar_wrap a {
  text-decoration: underline;
}

.entry .entry-content > *,
.entry .entry-summary > * {
  margin: 32px 0;
  max-width: 100%;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *,
  .entry .entry-summary > * {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content > *,
  .entry .entry-summary > * {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *,
  .entry .entry-summary > * {
    margin: 32px 0;
  }
}

.entry .entry-content > * > *:last-child,
.entry .entry-summary > * > *:last-child {
  margin-bottom: 0;
}

.entry .entry-content > *.alignwide,
.entry .entry-summary > *.alignwide {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignwide,
  .entry .entry-summary > *.alignwide {
    width: 100%;
    max-width: 100%;
  }
}

.entry .entry-content > *.alignfull,
.entry .entry-summary > *.alignfull {
  position: relative;
  left: -1rem;
  width: calc( 100% + (2 * 1rem));
  max-width: calc( 100% + (2 * 1rem));
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignfull,
  .entry .entry-summary > *.alignfull {
    margin-top: calc(2 * 1rem);
    margin-bottom: calc(2 * 1rem);
    left: calc( -12.5% - 75px);
    width: calc( 125% + 150px);
    max-width: calc( 125% + 150px);
  }
}

.entry .entry-content > *.alignleft,
.entry .entry-summary > *.alignleft {
  float: left;
  max-width: calc(5 * (100vw / 12));
  margin-top: 0;
  margin-left: 0;
  margin-right: 1rem;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignleft,
  .entry .entry-summary > *.alignleft {
    max-width: calc(4 * (100vw / 12));
    margin-right: calc(2 * 1rem);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content > *.alignleft,
  .entry .entry-summary > *.alignleft {
    max-width: calc(3 * (100vw / 12));
  }
}

.entry .entry-content > *.alignright,
.entry .entry-summary > *.alignright {
  float: right;
  max-width: calc(5 * (100vw / 12));
  margin-top: 0;
  margin-left: 1rem;
  margin-right: 0;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignright,
  .entry .entry-summary > *.alignright {
    max-width: calc(4 * (100vw / 12));
    margin-left: calc(2 * 1rem);
    margin-right: 0;
  }
}

.entry .entry-content > *.aligncenter,
.entry .entry-summary > *.aligncenter {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.aligncenter,
  .entry .entry-summary > *.aligncenter {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content > *.aligncenter,
  .entry .entry-summary > *.aligncenter {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.aligncenter,
  .entry .entry-summary > *.aligncenter {
    margin-left: 0;
    margin-right: 0;
  }
}

.entry .entry-content p.has-background {
  padding: 20px 30px;
}

.entry .entry-content .wp-block-audio {
  width: 100%;
}

.entry .entry-content .wp-block-audio audio {
  width: 100%;
}

.entry .entry-content .wp-block-audio.alignleft audio,
.entry .entry-content .wp-block-audio.alignright audio {
  max-width: 198px;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-audio.alignleft audio,
  .entry .entry-content .wp-block-audio.alignright audio {
    max-width: 384px;
  }
}

@media only screen and (min-width: 1379px) {
  .entry .entry-content .wp-block-audio.alignleft audio,
  .entry .entry-content .wp-block-audio.alignright audio {
    max-width: 385.44px;
  }
}

.entry .entry-content .wp-block-audio.aligncenter {
  margin: 32px calc(2 * (100vw / 12));
  max-width: calc(6 * (100vw / 12));
}

.entry .entry-content .wp-block-video video {
  width: 100%;
}

.entry .entry-content .wp-block-button .wp-block-button__link {
  transition: background 150ms ease-in-out;
  border: none;
  background: #0073aa;
  font-size: 0.88889em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.2;
  box-sizing: border-box;
  font-weight: bold;
  text-decoration: none;
  padding: 0.76rem 1rem;
  outline: none;
  color: white;
  outline: none;
}

.entry .entry-content .wp-block-button .wp-block-button__link:hover {
  background: #111;
  cursor: pointer;
}

.entry .entry-content .wp-block-button .wp-block-button__link:focus {
  background: #111;
  outline: thin dotted;
  outline-offset: -4px;
}

.entry .entry-content .wp-block-button:not(.is-style-squared) .wp-block-button__link {
  border-radius: 5px;
}

.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link,
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:focus,
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:active {
  transition: all 150ms ease-in-out;
  background: transparent;
  border: 2px solid currentColor;
  color: #0073aa;
}

.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:hover {
  color: #111;
}

.entry .entry-content .wp-block-archives,
.entry .entry-content .wp-block-categories,
.entry .entry-content .wp-block-latest-posts {
  padding: 0;
  list-style: none;
}

.entry .entry-content .wp-block-archives li,
.entry .entry-content .wp-block-categories li,
.entry .entry-content .wp-block-latest-posts li {
  color: #767676;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: calc(22px * 1.125);
  font-weight: bold;
  line-height: 1.2;
}

.entry .entry-content .wp-block-archives li:not(.menu-item-has-children),
.entry .entry-content .wp-block-categories li:not(.menu-item-has-children),
.entry .entry-content .wp-block-latest-posts li:not(.menu-item-has-children) {
  padding-bottom: 0.75rem;
}

.entry .entry-content .wp-block-archives li a,
.entry .entry-content .wp-block-categories li a,
.entry .entry-content .wp-block-latest-posts li a {
  text-decoration: none;
}

.entry .entry-content .wp-block-archives li ul,
.entry .entry-content .wp-block-categories li ul,
.entry .entry-content .wp-block-latest-posts li ul {
  padding-left: 1rem;
}

.entry .entry-content .wp-block-latest-posts.is-grid li {
  border-top: 2px solid #ccc;
  padding-top: 1rem;
  margin-bottom: 2rem;
}

.entry .entry-content .wp-block-latest-posts.is-grid li a:after {
  content: '';
}

.entry .entry-content .wp-block-latest-posts.is-grid li:last-child {
  margin-bottom: auto;
}

.entry .entry-content .wp-block-latest-posts.is-grid li:last-child a:after {
  content: '';
}

.entry .entry-content .wp-block-preformatted {
  font-size: 0.71111em;
  line-height: 1.8;
  padding: 1rem;
}

.entry .entry-content .wp-block-verse {
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-size: 22px;
  line-height: 1.8;
}

.entry .entry-content .has-drop-cap:not(:focus):first-letter {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 3.375em;
  line-height: 1;
  font-weight: bold;
  margin: 0 0.25em 0 0;
}

.entry .entry-content .wp-block-pullquote {
  border: none;
  padding: 1rem;
}

.entry .entry-content .wp-block-pullquote blockquote {
  color: #111;
  border: none;
  padding-bottom: calc(2 * 1rem);
  margin-right: 0;
}

.entry .entry-content .wp-block-pullquote p {
  font-size: 1.6875em;
  font-style: italic;
  line-height: 1.3;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

.entry .entry-content .wp-block-pullquote p em {
  font-style: normal;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote p {
    font-size: 2.25em;
  }
}

.entry .entry-content .wp-block-pullquote cite {
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  text-transform: none;
  color: #767676;
  font-size: calc(1rem / (1.25 * 1.125));
}

.entry .entry-content .wp-block-pullquote.alignleft, .entry .entry-content .wp-block-pullquote.alignright {
  padding: 0;
}

.entry .entry-content .wp-block-pullquote.alignleft blockquote, .entry .entry-content .wp-block-pullquote.alignright blockquote {
  margin-left: 0;
  padding: 0;
  text-align: left;
  max-width: 100%;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color {
  background-color: #0073aa;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color p {
  font-size: 1.6875em;
  line-height: 1.3;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote.is-style-solid-color p {
    font-size: 2.25em;
  }
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color a {
  color: #fff;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color cite {
  color: inherit;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote {
  color: #fff;
  margin: 0 auto;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color .has-primary-background-color {
  background-color: #0073aa;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color.alignleft, .entry .entry-content .wp-block-pullquote.is-style-solid-color.alignright {
  padding: 1rem 1rem 0;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color.alignleft blockquote, .entry .entry-content .wp-block-pullquote.is-style-solid-color.alignright blockquote {
  padding: 0 0 calc( 1.5 * 1rem);
  margin-left: 0;
  margin-top: 0;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote.is-style-solid-color.alignleft, .entry .entry-content .wp-block-pullquote.is-style-solid-color.alignright {
    padding: calc( 2 * 1rem) calc( 2 * 1rem) 1rem;
  }
}

.entry .entry-content .wp-block-quote:not(.is-large), .entry .entry-content .wp-block-quote:not(.is-style-large) {
  border-left: 2px solid #0073aa;
  padding-top: 0;
  padding-bottom: 0;
}

.entry .entry-content .wp-block-quote p {
  font-size: 1em;
  font-style: normal;
  line-height: 1.8;
}

.entry .entry-content .wp-block-quote cite {
  font-size: calc(1rem / (1.25 * 1.125));
}

.entry .entry-content .wp-block-quote.is-large, .entry .entry-content .wp-block-quote.is-style-large {
  margin: 1rem 0;
  padding: 0;
  border-left: none;
}

.entry .entry-content .wp-block-quote.is-large p, .entry .entry-content .wp-block-quote.is-style-large p {
  font-size: 1.6875em;
  line-height: 1.4;
  font-style: italic;
}

.entry .entry-content .wp-block-quote.is-large cite,
.entry .entry-content .wp-block-quote.is-large footer, .entry .entry-content .wp-block-quote.is-style-large cite,
.entry .entry-content .wp-block-quote.is-style-large footer {
  font-size: calc(1rem / (1.25 * 1.125));
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-quote.is-large, .entry .entry-content .wp-block-quote.is-style-large {
    margin: 1rem 0;
    padding: 1rem 0;
  }
  .entry .entry-content .wp-block-quote.is-large p, .entry .entry-content .wp-block-quote.is-style-large p {
    font-size: 1.6875em;
  }
}

.entry .entry-content .wp-block-image img {
  display: block;
}

.entry .entry-content .wp-block-image.alignleft, .entry .entry-content .wp-block-image.alignright {
  max-width: 100%;
}

.entry .entry-content .wp-block-image.alignfull img {
  width: 100vw;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-image.alignfull img {
    margin-left: auto;
    margin-right: auto;
  }
}

.entry .entry-content .wp-block-cover-image,
.entry .entry-content .wp-block-cover {
  position: relative;
  min-height: 430px;
}

.entry .entry-content .wp-block-cover-image .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover-image .wp-block-cover-text,
.entry .entry-content .wp-block-cover-image h2,
.entry .entry-content .wp-block-cover .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover .wp-block-cover-text,
.entry .entry-content .wp-block-cover h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 1.6875em;
  font-weight: bold;
  line-height: 1.25;
  padding: 1rem;
  color: #fff;
  width: calc(100vw - (2 * 1rem));
  max-width: calc(100vw - (2 * 1rem));
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-cover-image .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image h2,
  .entry .entry-content .wp-block-cover .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover .wp-block-cover-text,
  .entry .entry-content .wp-block-cover h2 {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-cover-image .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image h2,
  .entry .entry-content .wp-block-cover .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover .wp-block-cover-text,
  .entry .entry-content .wp-block-cover h2 {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-cover-image .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image h2,
  .entry .entry-content .wp-block-cover .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover .wp-block-cover-text,
  .entry .entry-content .wp-block-cover h2 {
    font-size: 2.25em;
    width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-cover-image .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image h2,
  .entry .entry-content .wp-block-cover .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover .wp-block-cover-text,
  .entry .entry-content .wp-block-cover h2 {
    width: calc(6 * (100vw / 12) - 28px);
  }
}

.entry .entry-content .wp-block-cover-image.alignleft h2,
.entry .entry-content .wp-block-cover-image.alignleft .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover-image.alignleft .wp-block-cover-text, .entry .entry-content .wp-block-cover-image.alignright h2,
.entry .entry-content .wp-block-cover-image.alignright .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover-image.alignright .wp-block-cover-text, .entry .entry-content .wp-block-cover-image.aligncenter h2,
.entry .entry-content .wp-block-cover-image.aligncenter .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover-image.aligncenter .wp-block-cover-text,
.entry .entry-content .wp-block-cover.alignleft h2,
.entry .entry-content .wp-block-cover.alignleft .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover.alignleft .wp-block-cover-text,
.entry .entry-content .wp-block-cover.alignright h2,
.entry .entry-content .wp-block-cover.alignright .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover.alignright .wp-block-cover-text,
.entry .entry-content .wp-block-cover.aligncenter h2,
.entry .entry-content .wp-block-cover.aligncenter .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover.aligncenter .wp-block-cover-text {
  width: 100%;
  z-index: 1;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
}

.entry .entry-content .wp-block-cover-image.alignleft, .entry .entry-content .wp-block-cover-image.alignright,
.entry .entry-content .wp-block-cover.alignleft,
.entry .entry-content .wp-block-cover.alignright {
  width: 100%;
}

.entry .entry-content .wp-block-cover-image.has-left-content, .entry .entry-content .wp-block-cover-image.has-right-content,
.entry .entry-content .wp-block-cover.has-left-content,
.entry .entry-content .wp-block-cover.has-right-content {
  justify-content: center;
}

.entry .entry-content .wp-block-gallery {
  list-style-type: none;
  padding-left: 0;
}

.entry .entry-content .wp-block-gallery .blocks-gallery-image:last-child,
.entry .entry-content .wp-block-gallery .blocks-gallery-item:last-child {
  margin-bottom: 16px;
}

.entry .entry-content .wp-block-audio figcaption,
.entry .entry-content .wp-block-video figcaption,
.entry .entry-content .wp-block-image figcaption,
.entry .entry-content .wp-block-gallery .blocks-gallery-image figcaption,
.entry .entry-content .wp-block-gallery .blocks-gallery-item figcaption {
  font-size: 0.71111em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
}

.entry .entry-content .wp-block-separator,
.entry .entry-content hr {
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: left;
}

.entry .entry-content .wp-block-separator:not(.is-style-dots),
.entry .entry-content hr:not(.is-style-dots) {
  background-color: #767676;
  border: 0;
  height: 2px;
}

.entry .entry-content .wp-block-separator:not(.is-style-wide):not(.is-style-dots),
.entry .entry-content hr:not(.is-style-wide):not(.is-style-dots) {
  max-width: 2.25em;
}

.entry .entry-content .wp-block-separator + h1:before,
.entry .entry-content .wp-block-separator + h2:before,
.entry .entry-content hr + h1:before,
.entry .entry-content hr + h2:before {
  display: none;
}

.entry .entry-content .wp-block-separator.is-style-dots,
.entry .entry-content hr.is-style-dots {
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-separator.is-style-dots,
  .entry .entry-content hr.is-style-dots {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-separator.is-style-dots,
  .entry .entry-content hr.is-style-dots {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

.entry .entry-content .wp-block-separator.is-style-dots:before,
.entry .entry-content hr.is-style-dots:before {
  color: #767676;
  font-size: 1.6875em;
  letter-spacing: 0.88889em;
  padding-left: 0.88889em;
}

.entry .entry-content .wp-block-embed-twitter {
  overflow: hidden;
}

.entry .entry-content .wp-block-table th,
.entry .entry-content .wp-block-table td {
  border-color: #767676;
}

.entry .entry-content .wp-block-file {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.entry .entry-content .wp-block-file .wp-block-file__button {
  transition: background 150ms ease-in-out;
  border: none;
  border-radius: 5px;
  background: #0073aa;
  font-size: 22px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.2;
  text-decoration: none;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: #fff;
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-file .wp-block-file__button {
    font-size: 22px;
    padding: 0.875rem 1.5rem;
  }
}

.entry .entry-content .wp-block-file .wp-block-file__button:hover {
  background: #111;
  cursor: pointer;
}

.entry .entry-content .wp-block-file .wp-block-file__button:focus {
  background: #111;
  outline: thin dotted;
  outline-offset: -4px;
}

.entry .entry-content .wp-block-file * + .wp-block-file__button {
  margin-left: 0.75rem;
}

.entry .entry-content .wp-block-code {
  border-radius: 0;
}

.entry .entry-content .wp-block-code code {
  font-size: 1.125em;
  white-space: pre-wrap;
  word-break: break-word;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-columns .wp-block-column > *:last-child {
    margin-bottom: 0;
  }
  .entry .entry-content .wp-block-columns[class*='has-'] > * {
    margin-right: 1rem;
  }
  .entry .entry-content .wp-block-columns[class*='has-'] > *:last-child {
    margin-right: 0;
  }
}

.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-meta {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
}

.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-meta .wp-block-latest-comments__comment-date {
  font-weight: normal;
}

.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment,
.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-date,
.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-excerpt p {
  font-size: inherit;
}

.entry .entry-content .wp-block-latest-comments.has-dates .wp-block-latest-comments__comment-date {
  font-size: 0.71111em;
}

.entry .entry-content .has-primary-background-color {
  background-color: #0073aa;
}

.entry .entry-content .has-primary-background-color p,
.entry .entry-content .has-primary-background-color h1,
.entry .entry-content .has-primary-background-color h2,
.entry .entry-content .has-primary-background-color h3,
.entry .entry-content .has-primary-background-color h4,
.entry .entry-content .has-primary-background-color h5,
.entry .entry-content .has-primary-background-color h6,
.entry .entry-content .has-primary-background-color a {
  color: #fff;
}

.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley {
  border: none;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
}

embed,
iframe,
object {
  max-width: 100%;
}

.custom-logo-link {
  display: inline-block;
}

.avatar {
  border-radius: 100%;
  display: block;
  height: calc(2.25 * 1rem);
  min-height: inherit;
  width: calc(2.25 * 1rem);
}

svg {
  transition: fill 120ms ease-in-out;
  fill: currentColor;
}

.wp-caption {
  margin-bottom: calc(1.5 * 1rem);
}

@media only screen and (min-width: 768px) {
  .wp-caption.aligncenter {
    position: relative;
    left: calc( calc(8 * (100vw / 12) - 28px) / 2);
    transform: translateX(-50%);
  }
}

@media only screen and (min-width: 1168px) {
  .wp-caption.aligncenter {
    left: calc( calc(6 * (100vw / 12) - 28px) / 2);
  }
}

.wp-caption img[class*="wp-image-"] {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.wp-caption-text {
  color: #767676;
  font-size: 0.71111em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
}

.gallery {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: calc(1.5 * 1rem);
}

.gallery-item {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  vertical-align: top;
  width: 100%;
}

.gallery-columns-2 .gallery-item {
  max-width: calc( ( 12 / 2 ) * (100% / 12) - ( 1rem * 0.5 ));
}

.gallery-columns-2 .gallery-item:nth-of-type(2n+2) {
  margin-right: 0;
}

.gallery-columns-3 .gallery-item {
  max-width: calc( ( 12 / 3 ) * (100% / 12) - ( 1rem * 0.66667 ));
}

.gallery-columns-3 .gallery-item:nth-of-type(3n+3) {
  margin-right: 0;
}

.gallery-columns-4 .gallery-item {
  max-width: calc( ( 12 / 4 ) * (100% / 12) - ( 1rem * 0.75 ));
}

.gallery-columns-4 .gallery-item:nth-of-type(4n+4) {
  margin-right: 0;
}

.gallery-columns-5 .gallery-item {
  max-width: calc( ( 12 / 5 ) * (100% / 12) - ( 1rem * 0.8 ));
}

.gallery-columns-5 .gallery-item:nth-of-type(5n+5) {
  margin-right: 0;
}

.gallery-columns-6 .gallery-item {
  max-width: calc( ( 12 / 6 ) * (100% / 12) - ( 1rem * 0.83333 ));
}

.gallery-columns-6 .gallery-item:nth-of-type(6n+6) {
  margin-right: 0;
}

.gallery-columns-7 .gallery-item {
  max-width: calc( ( 12 / 7 ) * (100% / 12) - ( 1rem * 0.85714 ));
}

.gallery-columns-7 .gallery-item:nth-of-type(7n+7) {
  margin-right: 0;
}

.gallery-columns-8 .gallery-item {
  max-width: calc( ( 12 / 8 ) * (100% / 12) - ( 1rem * 0.875 ));
}

.gallery-columns-8 .gallery-item:nth-of-type(8n+8) {
  margin-right: 0;
}

.gallery-columns-9 .gallery-item {
  max-width: calc( ( 12 / 9 ) * (100% / 12) - ( 1rem * 0.88889 ));
}

.gallery-columns-9 .gallery-item:nth-of-type(9n+9) {
  margin-right: 0;
}

.gallery-item:last-of-type {
  padding-right: 0;
}

.gallery-caption {
  display: block;
  font-size: 0.71111em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0.5rem;
}

.gallery-item > div > a {
  display: block;
  line-height: 0;
  box-shadow: 0 0 0 0 transparent;
}

.gallery-item > div > a:focus {
  box-shadow: 0 0 0 2px #0073aa;
}

`;

export default globalStyles;
