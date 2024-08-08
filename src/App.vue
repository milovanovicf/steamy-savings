<template>
  <Navbar />
  <RouterView />
  <About />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/UI/Navbar.vue';
import About from './components/About.vue';

document.addEventListener('DOMContentLoaded', function (event) {
  const scrollpos = sessionStorage.getItem('scrollpos');
  if (scrollpos) {
    window.scrollTo(0, scrollpos);
    sessionStorage.removeItem('scrollpos');
  }
});

window.addEventListener('beforeunload', function (e) {
  sessionStorage.setItem('scrollpos', window.scrollY);
});
</script>

<style>
@font-face {
  font-family: 'SupermolotNeue';
  src: url('./assets/fonts/TTSupermolotNeue-Medium.ttf');
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  font-family: 'SupermolotNeue', sans-serif;
}

body {
  font-family: 'SupermolotNeue', sans-serif;
  color: #fff;
  overflow-x: hidden;
  --s: 200px; /* control the size */
  --c1: #1b2131;
  --c2: #12141a;
  --c3: #1d1d25;

  background: repeating-conic-gradient(
        from 30deg,
        #0000 0 120deg,
        var(--c3) 0 180deg
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0 60deg,
      var(--c2) 0 120deg,
      var(--c3) 0 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);
}
</style>
