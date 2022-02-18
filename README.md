# SERP Template Repository

A repository with HTML, CSS, and some JS for SERP interfaces used in the SIGIR 2020 reproducibility study **Users and Contemporary SERPs: A (Re-)Investigation** by _Nirmal Roy, David Maxwell_ and _Claudia Hauff_ of TU Delft. 

## SERP interfaces

The repository contains four branches each pertaining to the four SERP types used in the study. The branch (and the SERP type) are listed as follows:
1. `list_simple` (**Simple List, SL**) &mdash; Considered as our baseline interface condition (the standard and widely used _ten blue links_, this interface presents results in a list, with each result presented one under the other. All results are _web results_, and as such are _homogeneous_ in terms of presented content.
2. `grid_simple` (**Simple Grid, SG**) &mdash; The same homogeneous approach to content is taken as **SL**, but with results presented in a _grid-based_ approach. Instead of scrolling along the vertical, participants subjected to this interface scroll along the _horizontal_.
3. `list` (**Heterogeneous List, HL**) &mdash; Similar in approach to **SL**, **HL** presents results in a list. However, different verticals are mixed in with the standard web results. Other heterogeneous content used in this study includes _image_ and _video_ results.
4. `grid` (**Heterogeneous Grid, HG**) &mdash; Similar to the above, content is displayed in grid form, with _web-based results_ appearing in a grid, before additional image and video content.

## Launching the study

In order to launch the study, using a particular template, clone the repository and checkout to the respective branch. After that, run the `app.js` file using `node`. For example, steps to launch the study in **HG** SERP would like this.

```
git clone https://github.com/roynirmal/serp_temp
cd serp_temp
git checkout grid
node app.js
```

You should be able to access the study at your browser `http://localhost:8080/`. 

