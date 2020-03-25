---
layout: single
title:  "The Summer Of Automation"
date: 2020-03-24 18:25:59 -0500
categories: data
---

Over the summer of 2019, I worked as a "local news automation fellow" for the Associated Press. Made possible through a Lenfest grant and coordinated from the Brown Institute For Media Innovation at Columbia University, this 12-week fellowship had two goals: build a software prototype that could automate stories on the education beat, and develop, in the form of a written report, a blueprint for news automation for the Associated Press and the local news outlets in its network.

Together with my co-fellow, Sam Moghadam, I worked from the AP's HQ in downtown Manhattan, but we were piloting the project 40 miles to the east, at Long Island's largest newspaper, Newsday. What follows is a brief description of the process and outcome.

## 1. Scoping the project

First and foremost, we had to answer the question of what to automate. We identified multiple potential automation initiatives and settled on two main projects/stories: ![hampstead]({{ site.url }}{{ site.baseurl }}/assets/images/hampstead_before.jpg){: .align-right}

- coverage of Long Island school board elections, which require a lot of investment from the education editors and reporters. By automating some of the repetitive aspects of their work, Newsday could publish voter guides, night of-results and next-day recap faster, cheaper and with less room for errors. At the same time, it would free reporters' time to interview candidates and craft analysis.
- Newsday already gave subscribers access of 120+ K-12 school districts in Long Island, but the profiles consisted of data tables and visualizations (see the example on the right). By adding a multi-paragraph description, we wanted to give readers the most important facts on a school district in a more digestible way.


## 2. Workflow

Automating the election coverage and the school district profiles relied on the same underlying technology: *Natural Language Generation* or NLG. Combine  written templates and structured data into a generator, and automated text comes out. Think *MadLibs*, but with much more logic built in besides filling in the blanks (such as averages, comparison, lists, pluralization, etc).

A snippet of template code looked like something like this:

![district-template]({{ site.url }}{{ site.baseurl }}/assets/images/district-template.png){: .align-center}

We as developers couldn't write the text in white, because that required beat knowledge of Long Island's education system as well as an understanding of Newsday's editorial style. On the other hand, we could hardly ask Newsday reporters to learn how to write code. In the end, we settled on an iterative workflow, where one of Newsday's reporters wrote example stories, we wrote the templates and the generator code. The generated stories were then corrected by Newsday, and we updated our code accordingly. For the election coverage, this process was easier because the example stories had already been written, so to speak, we could use past issues of Newsday as an example.

## 3. The technical nuts and bolts

We decided to use **Python** as the main programming language for the project for the following reasons:

- Python is good for rapid prototyping.
-	Python has a large selection of powerful templating languages (i.e., Jinja, Django, Cheetah).
-	Many data science and natural language processing libraries (i.e., NumPy, SciPy, Scikit-learn, NLTK) have Python interfaces.
-	We were both familiar with the language

We quickly decided to build our tool as a **REST API** which had a few advantages:

-	We didn’t have to worry about layout or UI, leaving that task to Newsday’s CMS.
-	No database meant easier setup. We could rely on Newsday’s existing data infrastructure.
-	 Easier to adapt the tool to other newsrooms with their own setup needs.
-	With Django and Django REST, we had powerful frameworks which took care of most of the API functionality (HTTP parsing, documentation, middleware, etc.), freeing up development time to focus on the templating engine instead.

Some additional Python libraries we used that are worth mentioning:

-	**Django templating language**: While Django allows the developer to use any of the many Python templating languages, we settled on Django’s own templating language for a number of reasons:
    - The possibility of using nested templates (i.e., using one template as part of another template), which reduces complexity of the templates and increases modularity and hence reusability.
    - Its large set of built-in tags and filters, which support complex logic.
    - Templates are mostly human-readable, even for people with limited coding experience.
    - Easy to add custom functionality by creating our own template tags and filters.
-	**Pattern.en**: This library, while mostly designed for NLP tasks, has some powerful natural language generation (NLG) features, such as verb conjugation and pluralization.
-	**Pandas**: One of the most popular Python libraries for SQL-like data manipulation, as well as statistical analysis. We used it to preprocess data.


## 4. Outcome

By the end of the summer, not only had we produced a final report suggesting ways the AP could guide automation efforts in local news, we had also automated drafts for most of Newsday's schoolboard election coverage, including voter guides, night-of live results, and next-day recap for 120+ districts. Here is an example of the outline for the voter guides:

![voter-guide-drafts]({{ site.url }}{{ site.baseurl }}/assets/images/voter-guide-drafts.png){: .align-center}

While reporters still have to write through this outline, data such as budgets, tax levy, term lengths, candidates and urls is already in place, saving them from repetitive and error-prone work.

Here is an example of a fully automated description of the Hampstead school district:

![hampstead-final]({{ site.url }}{{ site.baseurl }}/assets/images/hampstead-final.png){: .align-center}

Using state-level education data, we generated similar multi-paragraph descriptions for all school districts in Long Island, ready to be published without the need for human intervention.

