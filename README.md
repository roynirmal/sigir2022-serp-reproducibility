# SIGIR 2022 Reproducibility Paper Code Repository

A repository with HTML, CSS, and some JS for SERP interfaces used in the SIGIR 2020 reproducibility study **Users and Contemporary SERPs: A (Re-)Investigation** by _Nirmal Roy, David Maxwell_ and _Claudia Hauff_ of TU Delft. 

---

## SERP interfaces

The repository contains four branches each pertaining to the four SERP types used in the study  :books:. The branch (and the SERP type) are listed as follows:

1. `list_simple` (**Simple List, SL**) &mdash; Considered as our baseline interface condition (the standard and widely used _ten blue links_, this interface presents results in a list, with each result presented one under the other. All results are _web results_, and as such are _homogeneous_ in terms of presented content.
2. `grid_simple` (**Simple Grid, SG**) &mdash; The same homogeneous approach to content is taken as **SL**, but with results presented in a _grid-based_ approach. Instead of scrolling along the vertical, participants subjected to this interface scroll along the _horizontal_.
3. `list` (**Heterogeneous List, HL**) &mdash; Similar in approach to **SL**, **HL** presents results in a list. However, different verticals are mixed in with the standard web results. Other heterogeneous content used in this study includes _image_ and _video_ results.
4. `grid` (**Heterogeneous Grid, HG**) &mdash; Similar to the above, content is displayed in grid form, with _web-based results_ appearing in a grid, before additional image and video content.

---

## Launching the study :rocket:

In order to launch the study, using a particular template, clone the repository and checkout to the respective branch. After that, run the `app.js` file using `node`. For example, steps to launch the study in **HG** SERP would like this.

```
git clone https://github.com/roynirmal/serp_temp.git
cd serp_temp
git checkout grid
node app.js
```

You should be able to access the study at your browser `http://localhost:8080/`. 

:warning: **Note**
- You will need to have [node installed](https://nodejs.org/en/download/) to launch the study. 
- Your screen size needs to be atleast 1920 * 1080.
- :microscope: We use [LogUI](http://logui.ewi.tudelft.nl/#/) to log user interactions. The code is already integrated in the scripts. You need to create an user profile, login and create an AuthToken (details on how to do that is mentioned [here](https://github.com/logui-framework/server/wiki/First-Run-Guide)). You need to change the AuthToken by setting the new token for `logUIConfigurationObject.logUIConfiguration.authorisationToken` inside `./standard/js/logui-driver.js` for the respective branch (aka each epxerimental condition). 


---

## Abstract
> The Search Engine Result Page (SERP) has evolved significantly over the last two decades, moving away from the simple ten blue links paradigm to considerably more complex presentations that contain results from multiple verticals and granularities of textual information. Prior works have investigated how user interactions on the SERP are influenced by the presence or absence of heterogeneous content (e.g., images, videos, or news content), the layout of the SERP (list vs. grid layout), and task complexity. In this paper, we reproduce the user studies conducted in prior works—specifically those of Arguello et al. [4] and Siu and Chaparro [29]—to explore to what extent the findings from research conducted five to ten years ago still hold today as the average web user has become accustomed to SERPs with ever-increasing presentational complexity. To this end, we designed and ran a user study with four different SERP interfaces: (i) a heterogeneous grid; (ii) a heterogeneous list; (iii) a simple grid; and (iv) a simple list. We collected the interactions of 41 study participants over 12 search tasks for our analyses. We observed that SERP types and task complexity affect user interactions with search results. We also find evidence to support most (6 out of 8) observations from [4 , 29 ] indicating that user interaction with different interfaces and to solve tasks of different complexity have remained mostly similar over time.

