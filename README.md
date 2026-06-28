# Expenses chart component - JSON

[Live Site URL](https://i000o.github.io/expenses-component-json/)  
![Outcome](/design/desktop-screenshot.png)

---

## Table of contents

- [Purpose & Scope](#purpose-and-scope)
- [Decisions](#decisions)
- [Debugging](#debugging)
- [Future](#future)

---

## Purpose & Scope

This is an expenses chart component designed to visualise expenses from the past 7 days in a bar chart. It shows current balance, total expenditure for a month with a percentage-rise from the previous month's data. On hover, the component shows values per day above the bar. The bar for the current day is always in blue, compared to the other coral colored ones.

This component doesn't show alternative currencies, the dynamic data lies within the graph, while the totals and percentage rise are fixed figures, which could be scoped to act dynamically in future. The chart doesn't sub-divide expenditure into categories with a color code. It doesn't show any average expenditure or whether the amounts go beyond or below a target spend goal.

The design brief belongs to [Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt).

`#tailwind` `#vanillajs` `#json`.

---

## Decisions

**`Math.max()` to cap bar heights without Y-axis values**
Used `Math.max()` to scale the bars relative to the highest amount. No need for Y-axis values where tooltip shows true value and units.

**`<p>` over `h1-h6` due to Tailwind non-styling by default**
Initially, values were ranked `h1-h6` for semantics, but since TW doesn't auto-style those by hierarchy, I switched them to only `<p>`, styling manually, prioritising the use of a `<h1>` at least.

---

## Debugging

**`bg-color` over `opacity`**
Used lighter `bg-[]` to create hover states on the bars since opacity affects children `.bar:hover .bar-tooltip` in `input.css @apply` methods, so the tooltips were affected.

---

## Future

- Add average spend indicator across bar graph to view whether expenses went beyond or below target.
- Use a traffic light system to indicate compliance against budget.
- Make total, balance and percentage inc/dec dynamic data.
- Utilise a stacked bar graph to view category breakdowns of expenditure across wants/needs/savings.
