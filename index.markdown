---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
last_modified_at: 2023-02-11T20:33:15
---

<script src="{{ base.url | prepend: site.url }}/assets/js/test.js"></script>

{% include sign-in-dialog.html %}

<div class="home">
  {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%}

    <h2>Sign in</h2>
  

  {{ content }}

</div>
