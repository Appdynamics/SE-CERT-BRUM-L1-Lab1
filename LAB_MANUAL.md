- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Manually add the JS agent to the page](#manually-add-the-js-agent-to-the-page)
- [Add Page user data to the config](#add-page-user-data-to-the-config)
- [Analyze the Data in Browser Analytics](#analyze-the-data-in-browser-analytics)
- [Set a Custom Page Name in the Config](#set-a-custom-page-name-in-the-config)
- [Increase the resource timing limit](#increase-the-resource-timing-limit)
- [Troubleshooting](#troubleshooting)

# Introduction

This lab will guide you through several BRUM use cases and troubleshooting scenarios.

Follow this lab manual with the accompanying application. Copy this lab manual text into a Doc for recording your responses to the lab questions. Screen shots are perfectly fine to answer some questions. Other questions might require a written response, but don't write an essay. Short and to the point is fine so long as it's clear that you understand the concept.

If you get stuck, make sure that you have a good config in the Controller and successful Beacons being sent. DevTools will be your best friend along the way so make sure that you are comfortable with the capabilities.

# Getting Started

This lab consists of a single page that will automatically refresh itself. This is especially useful for driving load during the lab. Uncheck the checkbox in the upper right if you want to stop the auto-reload.

1. Start the lab with your chosed method in the [README](README.md)
1. Open the Lab 1 app at **http://YOUR_VM_URL:3000**
2. Open an SSH window and SSH into the VM and cd into SE-CERT-BRUM-L1-Lab1/

# Manually add the JS agent to the page

1. Create a new BRUM app in your Controller.
2. Follow the official documentation to manually add the JS agent to the SE-CERT-BRUM-L1-Lab1/src//public/index.html file.

# Add Page user data to the config

Report the following custom user data. You&#39;ll verify this data in Browser Analytics so make sure that you&#39;re using the correct data type in the user data configuration. (Enter the **exact** parts in blue as your custom data.)

| **Variable Name** | **Description** | **Which data type should you use?** |
| --- | --- | --- |
| username | Enter your name |   |
| courseRating | Enter &quot;Math.floor(Math.random() \* 5 + 1)&quot; |   |
| pricePaid | Enter &quot;getPrice(5, 50)&quot; |   |
| timestamp | Enter &quot;new Date().getTime()&quot; |   |
| isDone | Enter &quot;true&quot; |   |

1. Verify this user data in your page snapshots and paste a screenshot here.
2. Are you seeing this user data in any ajax snapshots?
  1. Why or why not?
3. Notice that setting user data for pricePaid instructs you to call a custom function.
  1. Where is this function located?
  2. Explain how the JS agent is able to take advantage of this function.

# Analyze the Data in Browser Analytics

1. Enable Browser Analytics for your application.
2. Create a new Analytics search to verify your user data.
3. Create visualizations for each of your custom data metrics.
4. Paste a screenshot of your visualizations.

# Set a Custom Page Name in the Config

1. What does BRUM use by default to name the page?
  1. How does this show up in the UI?
2. Set a custom page name of &quot;BRUM Lab&quot; by editing the JS agent&#39;s configuration. **Do not use the UI to rename the page.**
3. What happens to your list of Pages &amp; Ajax Requests?
  1. Is the original name still available somewhere?
4. Did this impact your Browser Analytics dashboard?

# Increase the resource timing limit

1. While not a problem on this page, some web pages can contain several hundred external resources.
  1. What might be the impact on a page with so many resources? Why?
  2. How will different resources impact the CRP, e.g. images vs CSS?
2. Edit the JS agent configuration to increase the resource timing limit to 200.

# Troubleshooting

1. Do the snapshots indicate any particular performance issues? Explain.
2. What are the slowest resources and images?
3. What impact do they have on the overall page load time?
4. How might the application owner fix this?
5. Why are some lines in the resource waterfall chart grey or blue?
6. What is the slowest domain serving resources? How do you know?
7. What visibility do you have into Server Time? Why?
8. What insight do you find in your browser&#39;s Dev Tools?
  1. How does this compare to the data in BRUM?
  2. Why are they different?
9. Create a HAR file and save it to demonstrate that you created it.
