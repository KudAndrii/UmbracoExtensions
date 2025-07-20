import { map as Xs, html as He, css as Zs, state as Se, property as Ee, query as Gs, customElement as Js } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as Qs } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as to } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as eo } from "@umbraco-cms/backoffice/event";
const so = ':root,:host,.sl-theme-light{color-scheme:light;--sl-color-gray-50: hsl(0 0% 97.5%);--sl-color-gray-100: hsl(240 4.8% 95.9%);--sl-color-gray-200: hsl(240 5.9% 90%);--sl-color-gray-300: hsl(240 4.9% 83.9%);--sl-color-gray-400: hsl(240 5% 64.9%);--sl-color-gray-500: hsl(240 3.8% 46.1%);--sl-color-gray-600: hsl(240 5.2% 33.9%);--sl-color-gray-700: hsl(240 5.3% 26.1%);--sl-color-gray-800: hsl(240 3.7% 15.9%);--sl-color-gray-900: hsl(240 5.9% 10%);--sl-color-gray-950: hsl(240 7.3% 8%);--sl-color-red-50: hsl(0 85.7% 97.3%);--sl-color-red-100: hsl(0 93.3% 94.1%);--sl-color-red-200: hsl(0 96.3% 89.4%);--sl-color-red-300: hsl(0 93.5% 81.8%);--sl-color-red-400: hsl(0 90.6% 70.8%);--sl-color-red-500: hsl(0 84.2% 60.2%);--sl-color-red-600: hsl(0 72.2% 50.6%);--sl-color-red-700: hsl(0 73.7% 41.8%);--sl-color-red-800: hsl(0 70% 35.3%);--sl-color-red-900: hsl(0 62.8% 30.6%);--sl-color-red-950: hsl(0 60% 19.6%);--sl-color-orange-50: hsl(33.3 100% 96.5%);--sl-color-orange-100: hsl(34.3 100% 91.8%);--sl-color-orange-200: hsl(32.1 97.7% 83.1%);--sl-color-orange-300: hsl(30.7 97.2% 72.4%);--sl-color-orange-400: hsl(27 96% 61%);--sl-color-orange-500: hsl(24.6 95% 53.1%);--sl-color-orange-600: hsl(20.5 90.2% 48.2%);--sl-color-orange-700: hsl(17.5 88.3% 40.4%);--sl-color-orange-800: hsl(15 79.1% 33.7%);--sl-color-orange-900: hsl(15.3 74.6% 27.8%);--sl-color-orange-950: hsl(15.2 69.1% 19%);--sl-color-amber-50: hsl(48 100% 96.1%);--sl-color-amber-100: hsl(48 96.5% 88.8%);--sl-color-amber-200: hsl(48 96.6% 76.7%);--sl-color-amber-300: hsl(45.9 96.7% 64.5%);--sl-color-amber-400: hsl(43.3 96.4% 56.3%);--sl-color-amber-500: hsl(37.7 92.1% 50.2%);--sl-color-amber-600: hsl(32.1 94.6% 43.7%);--sl-color-amber-700: hsl(26 90.5% 37.1%);--sl-color-amber-800: hsl(22.7 82.5% 31.4%);--sl-color-amber-900: hsl(21.7 77.8% 26.5%);--sl-color-amber-950: hsl(22.9 74.1% 16.7%);--sl-color-yellow-50: hsl(54.5 91.7% 95.3%);--sl-color-yellow-100: hsl(54.9 96.7% 88%);--sl-color-yellow-200: hsl(52.8 98.3% 76.9%);--sl-color-yellow-300: hsl(50.4 97.8% 63.5%);--sl-color-yellow-400: hsl(47.9 95.8% 53.1%);--sl-color-yellow-500: hsl(45.4 93.4% 47.5%);--sl-color-yellow-600: hsl(40.6 96.1% 40.4%);--sl-color-yellow-700: hsl(35.5 91.7% 32.9%);--sl-color-yellow-800: hsl(31.8 81% 28.8%);--sl-color-yellow-900: hsl(28.4 72.5% 25.7%);--sl-color-yellow-950: hsl(33.1 69% 13.9%);--sl-color-lime-50: hsl(78.3 92% 95.1%);--sl-color-lime-100: hsl(79.6 89.1% 89.2%);--sl-color-lime-200: hsl(80.9 88.5% 79.6%);--sl-color-lime-300: hsl(82 84.5% 67.1%);--sl-color-lime-400: hsl(82.7 78% 55.5%);--sl-color-lime-500: hsl(83.7 80.5% 44.3%);--sl-color-lime-600: hsl(84.8 85.2% 34.5%);--sl-color-lime-700: hsl(85.9 78.4% 27.3%);--sl-color-lime-800: hsl(86.3 69% 22.7%);--sl-color-lime-900: hsl(87.6 61.2% 20.2%);--sl-color-lime-950: hsl(86.5 60.6% 13.9%);--sl-color-green-50: hsl(138.5 76.5% 96.7%);--sl-color-green-100: hsl(140.6 84.2% 92.5%);--sl-color-green-200: hsl(141 78.9% 85.1%);--sl-color-green-300: hsl(141.7 76.6% 73.1%);--sl-color-green-400: hsl(141.9 69.2% 58%);--sl-color-green-500: hsl(142.1 70.6% 45.3%);--sl-color-green-600: hsl(142.1 76.2% 36.3%);--sl-color-green-700: hsl(142.4 71.8% 29.2%);--sl-color-green-800: hsl(142.8 64.2% 24.1%);--sl-color-green-900: hsl(143.8 61.2% 20.2%);--sl-color-green-950: hsl(144.3 60.7% 12%);--sl-color-emerald-50: hsl(151.8 81% 95.9%);--sl-color-emerald-100: hsl(149.3 80.4% 90%);--sl-color-emerald-200: hsl(152.4 76% 80.4%);--sl-color-emerald-300: hsl(156.2 71.6% 66.9%);--sl-color-emerald-400: hsl(158.1 64.4% 51.6%);--sl-color-emerald-500: hsl(160.1 84.1% 39.4%);--sl-color-emerald-600: hsl(161.4 93.5% 30.4%);--sl-color-emerald-700: hsl(162.9 93.5% 24.3%);--sl-color-emerald-800: hsl(163.1 88.1% 19.8%);--sl-color-emerald-900: hsl(164.2 85.7% 16.5%);--sl-color-emerald-950: hsl(164.3 87.5% 9.4%);--sl-color-teal-50: hsl(166.2 76.5% 96.7%);--sl-color-teal-100: hsl(167.2 85.5% 89.2%);--sl-color-teal-200: hsl(168.4 83.8% 78.2%);--sl-color-teal-300: hsl(170.6 76.9% 64.3%);--sl-color-teal-400: hsl(172.5 66% 50.4%);--sl-color-teal-500: hsl(173.4 80.4% 40%);--sl-color-teal-600: hsl(174.7 83.9% 31.6%);--sl-color-teal-700: hsl(175.3 77.4% 26.1%);--sl-color-teal-800: hsl(176.1 69.4% 21.8%);--sl-color-teal-900: hsl(175.9 60.8% 19%);--sl-color-teal-950: hsl(176.5 58.6% 11.4%);--sl-color-cyan-50: hsl(183.2 100% 96.3%);--sl-color-cyan-100: hsl(185.1 95.9% 90.4%);--sl-color-cyan-200: hsl(186.2 93.5% 81.8%);--sl-color-cyan-300: hsl(187 92.4% 69%);--sl-color-cyan-400: hsl(187.9 85.7% 53.3%);--sl-color-cyan-500: hsl(188.7 94.5% 42.7%);--sl-color-cyan-600: hsl(191.6 91.4% 36.5%);--sl-color-cyan-700: hsl(192.9 82.3% 31%);--sl-color-cyan-800: hsl(194.4 69.6% 27.1%);--sl-color-cyan-900: hsl(196.4 63.6% 23.7%);--sl-color-cyan-950: hsl(196.8 61% 16.1%);--sl-color-sky-50: hsl(204 100% 97.1%);--sl-color-sky-100: hsl(204 93.8% 93.7%);--sl-color-sky-200: hsl(200.6 94.4% 86.1%);--sl-color-sky-300: hsl(199.4 95.5% 73.9%);--sl-color-sky-400: hsl(198.4 93.2% 59.6%);--sl-color-sky-500: hsl(198.6 88.7% 48.4%);--sl-color-sky-600: hsl(200.4 98% 39.4%);--sl-color-sky-700: hsl(201.3 96.3% 32.2%);--sl-color-sky-800: hsl(201 90% 27.5%);--sl-color-sky-900: hsl(202 80.3% 23.9%);--sl-color-sky-950: hsl(202.3 73.8% 16.5%);--sl-color-blue-50: hsl(213.8 100% 96.9%);--sl-color-blue-100: hsl(214.3 94.6% 92.7%);--sl-color-blue-200: hsl(213.3 96.9% 87.3%);--sl-color-blue-300: hsl(211.7 96.4% 78.4%);--sl-color-blue-400: hsl(213.1 93.9% 67.8%);--sl-color-blue-500: hsl(217.2 91.2% 59.8%);--sl-color-blue-600: hsl(221.2 83.2% 53.3%);--sl-color-blue-700: hsl(224.3 76.3% 48%);--sl-color-blue-800: hsl(225.9 70.7% 40.2%);--sl-color-blue-900: hsl(224.4 64.3% 32.9%);--sl-color-blue-950: hsl(226.2 55.3% 18.4%);--sl-color-indigo-50: hsl(225.9 100% 96.7%);--sl-color-indigo-100: hsl(226.5 100% 93.9%);--sl-color-indigo-200: hsl(228 96.5% 88.8%);--sl-color-indigo-300: hsl(229.7 93.5% 81.8%);--sl-color-indigo-400: hsl(234.5 89.5% 73.9%);--sl-color-indigo-500: hsl(238.7 83.5% 66.7%);--sl-color-indigo-600: hsl(243.4 75.4% 58.6%);--sl-color-indigo-700: hsl(244.5 57.9% 50.6%);--sl-color-indigo-800: hsl(243.7 54.5% 41.4%);--sl-color-indigo-900: hsl(242.2 47.4% 34.3%);--sl-color-indigo-950: hsl(243.5 43.6% 22.9%);--sl-color-violet-50: hsl(250 100% 97.6%);--sl-color-violet-100: hsl(251.4 91.3% 95.5%);--sl-color-violet-200: hsl(250.5 95.2% 91.8%);--sl-color-violet-300: hsl(252.5 94.7% 85.1%);--sl-color-violet-400: hsl(255.1 91.7% 76.3%);--sl-color-violet-500: hsl(258.3 89.5% 66.3%);--sl-color-violet-600: hsl(262.1 83.3% 57.8%);--sl-color-violet-700: hsl(263.4 70% 50.4%);--sl-color-violet-800: hsl(263.4 69.3% 42.2%);--sl-color-violet-900: hsl(263.5 67.4% 34.9%);--sl-color-violet-950: hsl(265.1 61.5% 21.4%);--sl-color-purple-50: hsl(270 100% 98%);--sl-color-purple-100: hsl(268.7 100% 95.5%);--sl-color-purple-200: hsl(268.6 100% 91.8%);--sl-color-purple-300: hsl(269.2 97.4% 85.1%);--sl-color-purple-400: hsl(270 95.2% 75.3%);--sl-color-purple-500: hsl(270.7 91% 65.1%);--sl-color-purple-600: hsl(271.5 81.3% 55.9%);--sl-color-purple-700: hsl(272.1 71.7% 47.1%);--sl-color-purple-800: hsl(272.9 67.2% 39.4%);--sl-color-purple-900: hsl(273.6 65.6% 32%);--sl-color-purple-950: hsl(276 59.5% 16.5%);--sl-color-fuchsia-50: hsl(289.1 100% 97.8%);--sl-color-fuchsia-100: hsl(287 100% 95.5%);--sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);--sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);--sl-color-fuchsia-400: hsl(292 91.4% 72.5%);--sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);--sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);--sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);--sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);--sl-color-fuchsia-900: hsl(296.7 63.6% 28%);--sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);--sl-color-pink-50: hsl(327.3 73.3% 97.1%);--sl-color-pink-100: hsl(325.7 77.8% 94.7%);--sl-color-pink-200: hsl(325.9 84.6% 89.8%);--sl-color-pink-300: hsl(327.4 87.1% 81.8%);--sl-color-pink-400: hsl(328.6 85.5% 70.2%);--sl-color-pink-500: hsl(330.4 81.2% 60.4%);--sl-color-pink-600: hsl(333.3 71.4% 50.6%);--sl-color-pink-700: hsl(335.1 77.6% 42%);--sl-color-pink-800: hsl(335.8 74.4% 35.3%);--sl-color-pink-900: hsl(335.9 69% 30.4%);--sl-color-pink-950: hsl(336.2 65.4% 15.9%);--sl-color-rose-50: hsl(355.7 100% 97.3%);--sl-color-rose-100: hsl(355.6 100% 94.7%);--sl-color-rose-200: hsl(352.7 96.1% 90%);--sl-color-rose-300: hsl(352.6 95.7% 81.8%);--sl-color-rose-400: hsl(351.3 94.5% 71.4%);--sl-color-rose-500: hsl(349.7 89.2% 60.2%);--sl-color-rose-600: hsl(346.8 77.2% 49.8%);--sl-color-rose-700: hsl(345.3 82.7% 40.8%);--sl-color-rose-800: hsl(343.4 79.7% 34.7%);--sl-color-rose-900: hsl(341.5 75.5% 30.4%);--sl-color-rose-950: hsl(341.3 70.1% 17.1%);--sl-color-primary-50: var(--sl-color-sky-50);--sl-color-primary-100: var(--sl-color-sky-100);--sl-color-primary-200: var(--sl-color-sky-200);--sl-color-primary-300: var(--sl-color-sky-300);--sl-color-primary-400: var(--sl-color-sky-400);--sl-color-primary-500: var(--sl-color-sky-500);--sl-color-primary-600: var(--sl-color-sky-600);--sl-color-primary-700: var(--sl-color-sky-700);--sl-color-primary-800: var(--sl-color-sky-800);--sl-color-primary-900: var(--sl-color-sky-900);--sl-color-primary-950: var(--sl-color-sky-950);--sl-color-success-50: var(--sl-color-green-50);--sl-color-success-100: var(--sl-color-green-100);--sl-color-success-200: var(--sl-color-green-200);--sl-color-success-300: var(--sl-color-green-300);--sl-color-success-400: var(--sl-color-green-400);--sl-color-success-500: var(--sl-color-green-500);--sl-color-success-600: var(--sl-color-green-600);--sl-color-success-700: var(--sl-color-green-700);--sl-color-success-800: var(--sl-color-green-800);--sl-color-success-900: var(--sl-color-green-900);--sl-color-success-950: var(--sl-color-green-950);--sl-color-warning-50: var(--sl-color-amber-50);--sl-color-warning-100: var(--sl-color-amber-100);--sl-color-warning-200: var(--sl-color-amber-200);--sl-color-warning-300: var(--sl-color-amber-300);--sl-color-warning-400: var(--sl-color-amber-400);--sl-color-warning-500: var(--sl-color-amber-500);--sl-color-warning-600: var(--sl-color-amber-600);--sl-color-warning-700: var(--sl-color-amber-700);--sl-color-warning-800: var(--sl-color-amber-800);--sl-color-warning-900: var(--sl-color-amber-900);--sl-color-warning-950: var(--sl-color-amber-950);--sl-color-danger-50: var(--sl-color-red-50);--sl-color-danger-100: var(--sl-color-red-100);--sl-color-danger-200: var(--sl-color-red-200);--sl-color-danger-300: var(--sl-color-red-300);--sl-color-danger-400: var(--sl-color-red-400);--sl-color-danger-500: var(--sl-color-red-500);--sl-color-danger-600: var(--sl-color-red-600);--sl-color-danger-700: var(--sl-color-red-700);--sl-color-danger-800: var(--sl-color-red-800);--sl-color-danger-900: var(--sl-color-red-900);--sl-color-danger-950: var(--sl-color-red-950);--sl-color-neutral-50: var(--sl-color-gray-50);--sl-color-neutral-100: var(--sl-color-gray-100);--sl-color-neutral-200: var(--sl-color-gray-200);--sl-color-neutral-300: var(--sl-color-gray-300);--sl-color-neutral-400: var(--sl-color-gray-400);--sl-color-neutral-500: var(--sl-color-gray-500);--sl-color-neutral-600: var(--sl-color-gray-600);--sl-color-neutral-700: var(--sl-color-gray-700);--sl-color-neutral-800: var(--sl-color-gray-800);--sl-color-neutral-900: var(--sl-color-gray-900);--sl-color-neutral-950: var(--sl-color-gray-950);--sl-color-neutral-0: hsl(0, 0%, 100%);--sl-color-neutral-1000: hsl(0, 0%, 0%);--sl-border-radius-small: .1875rem;--sl-border-radius-medium: .25rem;--sl-border-radius-large: .5rem;--sl-border-radius-x-large: 1rem;--sl-border-radius-circle: 50%;--sl-border-radius-pill: 9999px;--sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);--sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);--sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);--sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);--sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);--sl-spacing-3x-small: .125rem;--sl-spacing-2x-small: .25rem;--sl-spacing-x-small: .5rem;--sl-spacing-small: .75rem;--sl-spacing-medium: 1rem;--sl-spacing-large: 1.25rem;--sl-spacing-x-large: 1.75rem;--sl-spacing-2x-large: 2.25rem;--sl-spacing-3x-large: 3rem;--sl-spacing-4x-large: 4.5rem;--sl-transition-x-slow: 1s;--sl-transition-slow: .5s;--sl-transition-medium: .25s;--sl-transition-fast: .15s;--sl-transition-x-fast: 50ms;--sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;--sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--sl-font-serif: Georgia, "Times New Roman", serif;--sl-font-size-2x-small: .625rem;--sl-font-size-x-small: .75rem;--sl-font-size-small: .875rem;--sl-font-size-medium: 1rem;--sl-font-size-large: 1.25rem;--sl-font-size-x-large: 1.5rem;--sl-font-size-2x-large: 2.25rem;--sl-font-size-3x-large: 3rem;--sl-font-size-4x-large: 4.5rem;--sl-font-weight-light: 300;--sl-font-weight-normal: 400;--sl-font-weight-semibold: 500;--sl-font-weight-bold: 700;--sl-letter-spacing-denser: -.03em;--sl-letter-spacing-dense: -.015em;--sl-letter-spacing-normal: normal;--sl-letter-spacing-loose: .075em;--sl-letter-spacing-looser: .15em;--sl-line-height-denser: 1;--sl-line-height-dense: 1.4;--sl-line-height-normal: 1.8;--sl-line-height-loose: 2.2;--sl-line-height-looser: 2.6;--sl-focus-ring-color: var(--sl-color-primary-600);--sl-focus-ring-style: solid;--sl-focus-ring-width: 3px;--sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset: 1px;--sl-button-font-size-small: var(--sl-font-size-x-small);--sl-button-font-size-medium: var(--sl-font-size-small);--sl-button-font-size-large: var(--sl-font-size-medium);--sl-input-height-small: 1.875rem;--sl-input-height-medium: 2.5rem;--sl-input-height-large: 3.125rem;--sl-input-background-color: var(--sl-color-neutral-0);--sl-input-background-color-hover: var(--sl-input-background-color);--sl-input-background-color-focus: var(--sl-input-background-color);--sl-input-background-color-disabled: var(--sl-color-neutral-100);--sl-input-border-color: var(--sl-color-neutral-300);--sl-input-border-color-hover: var(--sl-color-neutral-400);--sl-input-border-color-focus: var(--sl-color-primary-500);--sl-input-border-color-disabled: var(--sl-color-neutral-300);--sl-input-border-width: 1px;--sl-input-required-content: "*";--sl-input-required-content-offset: -2px;--sl-input-required-content-color: var(--sl-input-label-color);--sl-input-border-radius-small: var(--sl-border-radius-medium);--sl-input-border-radius-medium: var(--sl-border-radius-medium);--sl-input-border-radius-large: var(--sl-border-radius-medium);--sl-input-font-family: var(--sl-font-sans);--sl-input-font-weight: var(--sl-font-weight-normal);--sl-input-font-size-small: var(--sl-font-size-small);--sl-input-font-size-medium: var(--sl-font-size-medium);--sl-input-font-size-large: var(--sl-font-size-large);--sl-input-letter-spacing: var(--sl-letter-spacing-normal);--sl-input-color: var(--sl-color-neutral-700);--sl-input-color-hover: var(--sl-color-neutral-700);--sl-input-color-focus: var(--sl-color-neutral-700);--sl-input-color-disabled: var(--sl-color-neutral-900);--sl-input-icon-color: var(--sl-color-neutral-500);--sl-input-icon-color-hover: var(--sl-color-neutral-600);--sl-input-icon-color-focus: var(--sl-color-neutral-600);--sl-input-placeholder-color: var(--sl-color-neutral-500);--sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);--sl-input-spacing-small: var(--sl-spacing-small);--sl-input-spacing-medium: var(--sl-spacing-medium);--sl-input-spacing-large: var(--sl-spacing-large);--sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);--sl-input-focus-ring-offset: 0;--sl-input-filled-background-color: var(--sl-color-neutral-100);--sl-input-filled-background-color-hover: var(--sl-color-neutral-100);--sl-input-filled-background-color-focus: var(--sl-color-neutral-100);--sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);--sl-input-filled-color: var(--sl-color-neutral-800);--sl-input-filled-color-hover: var(--sl-color-neutral-800);--sl-input-filled-color-focus: var(--sl-color-neutral-700);--sl-input-filled-color-disabled: var(--sl-color-neutral-800);--sl-input-label-font-size-small: var(--sl-font-size-small);--sl-input-label-font-size-medium: var(--sl-font-size-medium);--sl-input-label-font-size-large: var(--sl-font-size-large);--sl-input-label-color: inherit;--sl-input-help-text-font-size-small: var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium: var(--sl-font-size-small);--sl-input-help-text-font-size-large: var(--sl-font-size-medium);--sl-input-help-text-color: var(--sl-color-neutral-500);--sl-toggle-size-small: .875rem;--sl-toggle-size-medium: 1.125rem;--sl-toggle-size-large: 1.375rem;--sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);--sl-panel-background-color: var(--sl-color-neutral-0);--sl-panel-border-color: var(--sl-color-neutral-200);--sl-panel-border-width: 1px;--sl-tooltip-border-radius: var(--sl-border-radius-medium);--sl-tooltip-background-color: var(--sl-color-neutral-800);--sl-tooltip-color: var(--sl-color-neutral-0);--sl-tooltip-font-family: var(--sl-font-sans);--sl-tooltip-font-weight: var(--sl-font-weight-normal);--sl-tooltip-font-size: var(--sl-font-size-small);--sl-tooltip-line-height: var(--sl-line-height-dense);--sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size: 6px;--sl-z-index-drawer: 700;--sl-z-index-dialog: 800;--sl-z-index-dropdown: 900;--sl-z-index-toast: 950;--sl-z-index-tooltip: 1000}@supports (scrollbar-gutter: stable){.sl-scroll-lock{scrollbar-gutter:var(--sl-scroll-lock-gutter)!important}.sl-scroll-lock body{overflow:hidden!important}}@supports not (scrollbar-gutter: stable){.sl-scroll-lock body{padding-right:var(--sl-scroll-lock-size)!important;overflow:hidden!important}}.sl-toast-stack{position:fixed;top:0;inset-inline-end:0;z-index:var(--sl-z-index-toast);width:28rem;max-width:100%;max-height:100%;overflow:auto}.sl-toast-stack sl-alert{margin:var(--sl-spacing-medium)}.sl-toast-stack sl-alert::part(base){box-shadow:var(--sl-shadow-large)}';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt = globalThis, ke = Kt.ShadowRoot && (Kt.ShadyCSS === void 0 || Kt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Oe = Symbol(), Ne = /* @__PURE__ */ new WeakMap();
let vs = class {
  constructor(t, s, o) {
    if (this._$cssResult$ = !0, o !== Oe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = s;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (ke && t === void 0) {
      const o = s !== void 0 && s.length === 1;
      o && (t = Ne.get(s)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && Ne.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const oo = (e) => new vs(typeof e == "string" ? e : e + "", void 0, Oe), ct = (e, ...t) => {
  const s = e.length === 1 ? e[0] : t.reduce((o, l, i) => o + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(l) + e[i + 1], e[0]);
  return new vs(s, e, Oe);
}, lo = (e, t) => {
  if (ke) e.adoptedStyleSheets = t.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  else for (const s of t) {
    const o = document.createElement("style"), l = Kt.litNonce;
    l !== void 0 && o.setAttribute("nonce", l), o.textContent = s.cssText, e.appendChild(o);
  }
}, Fe = ke ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let s = "";
  for (const o of t.cssRules) s += o.cssText;
  return oo(s);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: io, defineProperty: ro, getOwnPropertyDescriptor: no, getOwnPropertyNames: ao, getOwnPropertySymbols: co, getPrototypeOf: ho } = Object, lt = globalThis, Ue = lt.trustedTypes, uo = Ue ? Ue.emptyScript : "", ce = lt.reactiveElementPolyfillSupport, Mt = (e, t) => e, Gt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? uo : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let s = e;
  switch (t) {
    case Boolean:
      s = e !== null;
      break;
    case Number:
      s = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        s = JSON.parse(e);
      } catch {
        s = null;
      }
  }
  return s;
} }, ze = (e, t) => !io(e, t), je = { attribute: !0, type: String, converter: Gt, reflect: !1, useDefault: !1, hasChanged: ze };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), lt.litPropertyMetadata ?? (lt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let xt = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, s = je) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
      const o = Symbol(), l = this.getPropertyDescriptor(t, o, s);
      l !== void 0 && ro(this.prototype, t, l);
    }
  }
  static getPropertyDescriptor(t, s, o) {
    const { get: l, set: i } = no(this.prototype, t) ?? { get() {
      return this[s];
    }, set(r) {
      this[s] = r;
    } };
    return { get: l, set(r) {
      const n = l == null ? void 0 : l.call(this);
      i == null || i.call(this, r), this.requestUpdate(t, n, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? je;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Mt("elementProperties"))) return;
    const t = ho(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Mt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Mt("properties"))) {
      const s = this.properties, o = [...ao(s), ...co(s)];
      for (const l of o) this.createProperty(l, s[l]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const s = litPropertyMetadata.get(t);
      if (s !== void 0) for (const [o, l] of s) this.elementProperties.set(o, l);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [s, o] of this.elementProperties) {
      const l = this._$Eu(s, o);
      l !== void 0 && this._$Eh.set(l, s);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const s = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const l of o) s.unshift(Fe(l));
    } else t !== void 0 && s.push(Fe(t));
    return s;
  }
  static _$Eu(t, s) {
    const o = s.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((s) => this.enableUpdating = s), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((s) => s(this));
  }
  addController(t) {
    var s;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) == null || s.call(t));
  }
  removeController(t) {
    var s;
    (s = this._$EO) == null || s.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
    for (const o of s.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return lo(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((s) => {
      var o;
      return (o = s.hostConnected) == null ? void 0 : o.call(s);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((s) => {
      var o;
      return (o = s.hostDisconnected) == null ? void 0 : o.call(s);
    });
  }
  attributeChangedCallback(t, s, o) {
    this._$AK(t, o);
  }
  _$ET(t, s) {
    var i;
    const o = this.constructor.elementProperties.get(t), l = this.constructor._$Eu(t, o);
    if (l !== void 0 && o.reflect === !0) {
      const r = (((i = o.converter) == null ? void 0 : i.toAttribute) !== void 0 ? o.converter : Gt).toAttribute(s, o.type);
      this._$Em = t, r == null ? this.removeAttribute(l) : this.setAttribute(l, r), this._$Em = null;
    }
  }
  _$AK(t, s) {
    var i, r;
    const o = this.constructor, l = o._$Eh.get(t);
    if (l !== void 0 && this._$Em !== l) {
      const n = o.getPropertyOptions(l), a = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((i = n.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? n.converter : Gt;
      this._$Em = l, this[l] = a.fromAttribute(s, n.type) ?? ((r = this._$Ej) == null ? void 0 : r.get(l)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, s, o) {
    var l;
    if (t !== void 0) {
      const i = this.constructor, r = this[t];
      if (o ?? (o = i.getPropertyOptions(t)), !((o.hasChanged ?? ze)(r, s) || o.useDefault && o.reflect && r === ((l = this._$Ej) == null ? void 0 : l.get(t)) && !this.hasAttribute(i._$Eu(t, o)))) return;
      this.C(t, s, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, s, { useDefault: o, reflect: l, wrapped: i }, r) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), i !== !0 || r !== void 0) || (this._$AL.has(t) || (this.hasUpdated || o || (s = void 0), this._$AL.set(t, s)), l === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (s) {
      Promise.reject(s);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, r] of this._$Ep) this[i] = r;
        this._$Ep = void 0;
      }
      const l = this.constructor.elementProperties;
      if (l.size > 0) for (const [i, r] of l) {
        const { wrapped: n } = r, a = this[i];
        n !== !0 || this._$AL.has(i) || a === void 0 || this.C(i, void 0, r, a);
      }
    }
    let t = !1;
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), (o = this._$EO) == null || o.forEach((l) => {
        var i;
        return (i = l.hostUpdate) == null ? void 0 : i.call(l);
      }), this.update(s)) : this._$EM();
    } catch (l) {
      throw t = !1, this._$EM(), l;
    }
    t && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var s;
    (s = this._$EO) == null || s.forEach((o) => {
      var l;
      return (l = o.hostUpdated) == null ? void 0 : l.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((s) => this._$ET(s, this[s]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
xt.elementStyles = [], xt.shadowRootOptions = { mode: "open" }, xt[Mt("elementProperties")] = /* @__PURE__ */ new Map(), xt[Mt("finalized")] = /* @__PURE__ */ new Map(), ce == null || ce({ ReactiveElement: xt }), (lt.reactiveElementVersions ?? (lt.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vt = globalThis, Jt = Vt.trustedTypes, We = Jt ? Jt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, bs = "$lit$", ot = `lit$${Math.random().toFixed(9).slice(2)}$`, ys = "?" + ot, po = `<${ys}>`, vt = document, It = () => vt.createComment(""), Ht = (e) => e === null || typeof e != "object" && typeof e != "function", Pe = Array.isArray, fo = (e) => Pe(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", he = `[ 	
\f\r]`, Pt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qe = /-->/g, Ye = />/g, pt = RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, Xe = /"/g, ws = /^(?:script|style|textarea|title)$/i, mo = (e) => (t, ...s) => ({ _$litType$: e, strings: t, values: s }), O = mo(1), it = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Ze = /* @__PURE__ */ new WeakMap(), mt = vt.createTreeWalker(vt, 129);
function _s(e, t) {
  if (!Pe(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return We !== void 0 ? We.createHTML(t) : t;
}
const go = (e, t) => {
  const s = e.length - 1, o = [];
  let l, i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = Pt;
  for (let n = 0; n < s; n++) {
    const a = e[n];
    let c, h, d = -1, m = 0;
    for (; m < a.length && (r.lastIndex = m, h = r.exec(a), h !== null); ) m = r.lastIndex, r === Pt ? h[1] === "!--" ? r = qe : h[1] !== void 0 ? r = Ye : h[2] !== void 0 ? (ws.test(h[2]) && (l = RegExp("</" + h[2], "g")), r = pt) : h[3] !== void 0 && (r = pt) : r === pt ? h[0] === ">" ? (r = l ?? Pt, d = -1) : h[1] === void 0 ? d = -2 : (d = r.lastIndex - h[2].length, c = h[1], r = h[3] === void 0 ? pt : h[3] === '"' ? Xe : Ke) : r === Xe || r === Ke ? r = pt : r === qe || r === Ye ? r = Pt : (r = pt, l = void 0);
    const p = r === pt && e[n + 1].startsWith("/>") ? " " : "";
    i += r === Pt ? a + po : d >= 0 ? (o.push(c), a.slice(0, d) + bs + a.slice(d) + ot + p) : a + ot + (d === -2 ? n : p);
  }
  return [_s(e, i + (e[s] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
class Nt {
  constructor({ strings: t, _$litType$: s }, o) {
    let l;
    this.parts = [];
    let i = 0, r = 0;
    const n = t.length - 1, a = this.parts, [c, h] = go(t, s);
    if (this.el = Nt.createElement(c, o), mt.currentNode = this.el.content, s === 2 || s === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (l = mt.nextNode()) !== null && a.length < n; ) {
      if (l.nodeType === 1) {
        if (l.hasAttributes()) for (const d of l.getAttributeNames()) if (d.endsWith(bs)) {
          const m = h[r++], p = l.getAttribute(d).split(ot), g = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: i, name: g[2], strings: p, ctor: g[1] === "." ? bo : g[1] === "?" ? yo : g[1] === "@" ? wo : se }), l.removeAttribute(d);
        } else d.startsWith(ot) && (a.push({ type: 6, index: i }), l.removeAttribute(d));
        if (ws.test(l.tagName)) {
          const d = l.textContent.split(ot), m = d.length - 1;
          if (m > 0) {
            l.textContent = Jt ? Jt.emptyScript : "";
            for (let p = 0; p < m; p++) l.append(d[p], It()), mt.nextNode(), a.push({ type: 2, index: ++i });
            l.append(d[m], It());
          }
        }
      } else if (l.nodeType === 8) if (l.data === ys) a.push({ type: 2, index: i });
      else {
        let d = -1;
        for (; (d = l.data.indexOf(ot, d + 1)) !== -1; ) a.push({ type: 7, index: i }), d += ot.length - 1;
      }
      i++;
    }
  }
  static createElement(t, s) {
    const o = vt.createElement("template");
    return o.innerHTML = t, o;
  }
}
function Ct(e, t, s = e, o) {
  var r, n;
  if (t === it) return t;
  let l = o !== void 0 ? (r = s._$Co) == null ? void 0 : r[o] : s._$Cl;
  const i = Ht(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== i && ((n = l == null ? void 0 : l._$AO) == null || n.call(l, !1), i === void 0 ? l = void 0 : (l = new i(e), l._$AT(e, s, o)), o !== void 0 ? (s._$Co ?? (s._$Co = []))[o] = l : s._$Cl = l), l !== void 0 && (t = Ct(e, l._$AS(e, t.values), l, o)), t;
}
class vo {
  constructor(t, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: s }, parts: o } = this._$AD, l = ((t == null ? void 0 : t.creationScope) ?? vt).importNode(s, !0);
    mt.currentNode = l;
    let i = mt.nextNode(), r = 0, n = 0, a = o[0];
    for (; a !== void 0; ) {
      if (r === a.index) {
        let c;
        a.type === 2 ? c = new Ut(i, i.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(i, a.name, a.strings, this, t) : a.type === 6 && (c = new _o(i, this, t)), this._$AV.push(c), a = o[++n];
      }
      r !== (a == null ? void 0 : a.index) && (i = mt.nextNode(), r++);
    }
    return mt.currentNode = vt, l;
  }
  p(t) {
    let s = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, s), s += o.strings.length - 2) : o._$AI(t[s])), s++;
  }
}
class Ut {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, s, o, l) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = s, this._$AM = o, this.options = l, this._$Cv = (l == null ? void 0 : l.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = s.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, s = this) {
    t = Ct(this, t, s), Ht(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== it && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : fo(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && Ht(this._$AH) ? this._$AA.nextSibling.data = t : this.T(vt.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var i;
    const { values: s, _$litType$: o } = t, l = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = Nt.createElement(_s(o.h, o.h[0]), this.options)), o);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === l) this._$AH.p(s);
    else {
      const r = new vo(l, this), n = r.u(this.options);
      r.p(s), this.T(n), this._$AH = r;
    }
  }
  _$AC(t) {
    let s = Ze.get(t.strings);
    return s === void 0 && Ze.set(t.strings, s = new Nt(t)), s;
  }
  k(t) {
    Pe(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let o, l = 0;
    for (const i of t) l === s.length ? s.push(o = new Ut(this.O(It()), this.O(It()), this, this.options)) : o = s[l], o._$AI(i), l++;
    l < s.length && (this._$AR(o && o._$AB.nextSibling, l), s.length = l);
  }
  _$AR(t = this._$AA.nextSibling, s) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, s); t && t !== this._$AB; ) {
      const l = t.nextSibling;
      t.remove(), t = l;
    }
  }
  setConnected(t) {
    var s;
    this._$AM === void 0 && (this._$Cv = t, (s = this._$AP) == null || s.call(this, t));
  }
}
class se {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, s, o, l, i) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = s, this._$AM = l, this.options = i, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = C;
  }
  _$AI(t, s = this, o, l) {
    const i = this.strings;
    let r = !1;
    if (i === void 0) t = Ct(this, t, s, 0), r = !Ht(t) || t !== this._$AH && t !== it, r && (this._$AH = t);
    else {
      const n = t;
      let a, c;
      for (t = i[0], a = 0; a < i.length - 1; a++) c = Ct(this, n[o + a], s, a), c === it && (c = this._$AH[a]), r || (r = !Ht(c) || c !== this._$AH[a]), c === C ? t = C : t !== C && (t += (c ?? "") + i[a + 1]), this._$AH[a] = c;
    }
    r && !l && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class bo extends se {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class yo extends se {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class wo extends se {
  constructor(t, s, o, l, i) {
    super(t, s, o, l, i), this.type = 5;
  }
  _$AI(t, s = this) {
    if ((t = Ct(this, t, s, 0) ?? C) === it) return;
    const o = this._$AH, l = t === C && o !== C || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, i = t !== C && (o === C || l);
    l && this.element.removeEventListener(this.name, this, o), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var s;
    typeof this._$AH == "function" ? this._$AH.call(((s = this.options) == null ? void 0 : s.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class _o {
  constructor(t, s, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Ct(this, t);
  }
}
const de = Vt.litHtmlPolyfillSupport;
de == null || de(Nt, Ut), (Vt.litHtmlVersions ?? (Vt.litHtmlVersions = [])).push("3.3.0");
const xo = (e, t, s) => {
  const o = (s == null ? void 0 : s.renderBefore) ?? t;
  let l = o._$litPart$;
  if (l === void 0) {
    const i = (s == null ? void 0 : s.renderBefore) ?? null;
    o._$litPart$ = l = new Ut(t.insertBefore(It(), i), i, void 0, s ?? {});
  }
  return l._$AI(e), l;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt = globalThis;
let Bt = class extends xt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var s;
    const t = super.createRenderRoot();
    return (s = this.renderOptions).renderBefore ?? (s.renderBefore = t.firstChild), t;
  }
  update(t) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = xo(s, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return it;
  }
};
var gs;
Bt._$litElement$ = !0, Bt.finalized = !0, (gs = gt.litElementHydrateSupport) == null || gs.call(gt, { LitElement: Bt });
const ue = gt.litElementPolyfillSupport;
ue == null || ue({ LitElement: Bt });
(gt.litElementVersions ?? (gt.litElementVersions = [])).push("4.2.0");
var $o = ct`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`, Ao = ct`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`, be = "";
function Ge(e) {
  be = e;
}
function Co(e = "") {
  if (!be) {
    const t = [...document.getElementsByTagName("script")], s = t.find((o) => o.hasAttribute("data-shoelace"));
    if (s)
      Ge(s.getAttribute("data-shoelace"));
    else {
      const o = t.find((i) => /shoelace(\.min)?\.js($|\?)/.test(i.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));
      let l = "";
      o && (l = o.getAttribute("src")), Ge(l.split("/").slice(0, -1).join("/"));
    }
  }
  return be.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
var So = {
  name: "default",
  resolver: (e) => Co(`assets/icons/${e}.svg`)
}, Eo = So, Je = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, ko = {
  name: "system",
  resolver: (e) => e in Je ? `data:image/svg+xml,${encodeURIComponent(Je[e])}` : ""
}, Oo = ko, zo = [Eo, Oo], ye = [];
function Po(e) {
  ye.push(e);
}
function Lo(e) {
  ye = ye.filter((t) => t !== e);
}
function Qe(e) {
  return zo.find((t) => t.name === e);
}
var To = ct`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`, xs = Object.defineProperty, Ro = Object.defineProperties, Do = Object.getOwnPropertyDescriptor, Mo = Object.getOwnPropertyDescriptors, ts = Object.getOwnPropertySymbols, Vo = Object.prototype.hasOwnProperty, Bo = Object.prototype.propertyIsEnumerable, $s = (e) => {
  throw TypeError(e);
}, es = (e, t, s) => t in e ? xs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, wt = (e, t) => {
  for (var s in t || (t = {}))
    Vo.call(t, s) && es(e, s, t[s]);
  if (ts)
    for (var s of ts(t))
      Bo.call(t, s) && es(e, s, t[s]);
  return e;
}, oe = (e, t) => Ro(e, Mo(t)), u = (e, t, s, o) => {
  for (var l = o > 1 ? void 0 : o ? Do(t, s) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (l = (o ? r(t, s, l) : r(l)) || l);
  return o && l && xs(t, s, l), l;
}, As = (e, t, s) => t.has(e) || $s("Cannot " + s), Io = (e, t, s) => (As(e, t, "read from private field"), t.get(e)), Ho = (e, t, s) => t.has(e) ? $s("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), No = (e, t, s, o) => (As(e, t, "write to private field"), t.set(e, s), s);
function ht(e, t) {
  const s = wt({
    waitUntilFirstUpdate: !1
  }, t);
  return (o, l) => {
    const { update: i } = o, r = Array.isArray(e) ? e : [e];
    o.update = function(n) {
      r.forEach((a) => {
        const c = a;
        if (n.has(c)) {
          const h = n.get(c), d = this[c];
          h !== d && (!s.waitUntilFirstUpdate || this.hasUpdated) && this[l](h, d);
        }
      }), i.call(this, n);
    };
  };
}
var Et = ct`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fo = { attribute: !0, type: String, converter: Gt, reflect: !1, hasChanged: ze }, Uo = (e = Fo, t, s) => {
  const { kind: o, metadata: l } = s;
  let i = globalThis.litPropertyMetadata.get(l);
  if (i === void 0 && globalThis.litPropertyMetadata.set(l, i = /* @__PURE__ */ new Map()), o === "setter" && ((e = Object.create(e)).wrapped = !0), i.set(s.name, e), o === "accessor") {
    const { name: r } = s;
    return { set(n) {
      const a = t.get.call(this);
      t.set.call(this, n), this.requestUpdate(r, a, e);
    }, init(n) {
      return n !== void 0 && this.C(r, void 0, e, n), n;
    } };
  }
  if (o === "setter") {
    const { name: r } = s;
    return function(n) {
      const a = this[r];
      t.call(this, n), this.requestUpdate(r, a, e);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function f(e) {
  return (t, s) => typeof s == "object" ? Uo(e, t, s) : ((o, l, i) => {
    const r = l.hasOwnProperty(i);
    return l.constructor.createProperty(i, o), r ? Object.getOwnPropertyDescriptor(l, i) : void 0;
  })(e, t, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function N(e) {
  return f({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jo = (e, t, s) => (s.configurable = !0, s.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, s), s);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Q(e, t) {
  return (s, o, l) => {
    const i = (r) => {
      var n;
      return ((n = r.renderRoot) == null ? void 0 : n.querySelector(e)) ?? null;
    };
    return jo(s, o, { get() {
      return i(this);
    } });
  };
}
var Xt, K = class extends Bt {
  constructor() {
    super(), Ho(this, Xt, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
      this.constructor.define(e, t);
    });
  }
  emit(e, t) {
    const s = new CustomEvent(e, wt({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, t));
    return this.dispatchEvent(s), s;
  }
  /* eslint-enable */
  static define(e, t = this, s = {}) {
    const o = customElements.get(e);
    if (!o) {
      try {
        customElements.define(e, t, s);
      } catch {
        customElements.define(e, class extends t {
        }, s);
      }
      return;
    }
    let l = " (unknown version)", i = l;
    "version" in t && t.version && (l = " v" + t.version), "version" in o && o.version && (i = " v" + o.version), !(l && i && l === i) && console.warn(
      `Attempted to register <${e}>${l}, but <${e}>${i} has already been registered.`
    );
  }
  attributeChangedCallback(e, t, s) {
    Io(this, Xt) || (this.constructor.elementProperties.forEach(
      (o, l) => {
        o.reflect && this[l] != null && this.initialReflectedProperties.set(l, this[l]);
      }
    ), No(this, Xt, !0)), super.attributeChangedCallback(e, t, s);
  }
  willUpdate(e) {
    super.willUpdate(e), this.initialReflectedProperties.forEach((t, s) => {
      e.has(s) && this[s] == null && (this[s] = t);
    });
  }
};
Xt = /* @__PURE__ */ new WeakMap();
K.version = "2.20.1";
K.dependencies = {};
u([
  f()
], K.prototype, "dir", 2);
u([
  f()
], K.prototype, "lang", 2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wo = (e, t) => (e == null ? void 0 : e._$litType$) !== void 0;
var Lt = Symbol(), Wt = Symbol(), pe, fe = /* @__PURE__ */ new Map(), F = class extends K {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(e, t) {
    var s;
    let o;
    if (t != null && t.spriteSheet)
      return this.svg = O`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`, this.svg;
    try {
      if (o = await fetch(e, { mode: "cors" }), !o.ok) return o.status === 410 ? Lt : Wt;
    } catch {
      return Wt;
    }
    try {
      const l = document.createElement("div");
      l.innerHTML = await o.text();
      const i = l.firstElementChild;
      if (((s = i == null ? void 0 : i.tagName) == null ? void 0 : s.toLowerCase()) !== "svg") return Lt;
      pe || (pe = new DOMParser());
      const n = pe.parseFromString(i.outerHTML, "text/html").body.querySelector("svg");
      return n ? (n.part.add("svg"), document.adoptNode(n)) : Lt;
    } catch {
      return Lt;
    }
  }
  connectedCallback() {
    super.connectedCallback(), Po(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Lo(this);
  }
  getIconSource() {
    const e = Qe(this.library);
    return this.name && e ? {
      url: e.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var e;
    const { url: t, fromLibrary: s } = this.getIconSource(), o = s ? Qe(this.library) : void 0;
    if (!t) {
      this.svg = null;
      return;
    }
    let l = fe.get(t);
    if (l || (l = this.resolveIcon(t, o), fe.set(t, l)), !this.initialRender)
      return;
    const i = await l;
    if (i === Wt && fe.delete(t), t === this.getIconSource().url) {
      if (Wo(i)) {
        if (this.svg = i, o) {
          await this.updateComplete;
          const r = this.shadowRoot.querySelector("[part='svg']");
          typeof o.mutator == "function" && r && o.mutator(r);
        }
        return;
      }
      switch (i) {
        case Wt:
        case Lt:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = i.cloneNode(!0), (e = o == null ? void 0 : o.mutator) == null || e.call(o, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
F.styles = [Et, To];
u([
  N()
], F.prototype, "svg", 2);
u([
  f({ reflect: !0 })
], F.prototype, "name", 2);
u([
  f()
], F.prototype, "src", 2);
u([
  f()
], F.prototype, "label", 2);
u([
  f({ reflect: !0 })
], F.prototype, "library", 2);
u([
  ht("label")
], F.prototype, "handleLabelChange", 1);
u([
  ht(["name", "src", "library"])
], F.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Cs = { ATTRIBUTE: 1, CHILD: 2 }, Ss = (e) => (...t) => ({ _$litDirective$: e, values: t });
let Es = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, s, o) {
    this._$Ct = t, this._$AM = s, this._$Ci = o;
  }
  _$AS(t, s) {
    return this.update(t, s);
  }
  update(t, s) {
    return this.render(...s);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt = Ss(class extends Es {
  constructor(e) {
    var t;
    if (super(e), e.type !== Cs.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var o, l;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in t) t[i] && !((o = this.nt) != null && o.has(i)) && this.st.add(i);
      return this.render(t);
    }
    const s = e.element.classList;
    for (const i of this.st) i in t || (s.remove(i), this.st.delete(i));
    for (const i in t) {
      const r = !!t[i];
      r === this.st.has(i) || (l = this.nt) != null && l.has(i) || (r ? (s.add(i), this.st.add(i)) : (s.remove(i), this.st.delete(i)));
    }
    return it;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ks = Symbol.for(""), qo = (e) => {
  if ((e == null ? void 0 : e.r) === ks) return e == null ? void 0 : e._$litStatic$;
}, ss = (e, ...t) => ({ _$litStatic$: t.reduce((s, o, l) => s + ((i) => {
  if (i._$litStatic$ !== void 0) return i._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(o) + e[l + 1], e[0]), r: ks }), os = /* @__PURE__ */ new Map(), Yo = (e) => (t, ...s) => {
  const o = s.length;
  let l, i;
  const r = [], n = [];
  let a, c = 0, h = !1;
  for (; c < o; ) {
    for (a = t[c]; c < o && (i = s[c], (l = qo(i)) !== void 0); ) a += l + t[++c], h = !0;
    c !== o && n.push(i), r.push(a), c++;
  }
  if (c === o && r.push(t[o]), h) {
    const d = r.join("$$lit$$");
    (t = os.get(d)) === void 0 && (r.raw = r, os.set(d, t = r)), s = n;
  }
  return e(t, ...s);
}, Ko = Yo(O);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = (e) => e ?? C;
var L = class extends K {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick(e) {
    this.disabled && (e.preventDefault(), e.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(e) {
    this.button.focus(e);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const e = !!this.href, t = e ? ss`a` : ss`button`;
    return Ko`
      <${t}
        part="base"
        class=${bt({
      "icon-button": !0,
      "icon-button--disabled": !e && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${W(e ? void 0 : this.disabled)}
        type=${W(e ? void 0 : "button")}
        href=${W(e ? this.href : void 0)}
        target=${W(e ? this.target : void 0)}
        download=${W(e ? this.download : void 0)}
        rel=${W(e && this.target ? "noreferrer noopener" : void 0)}
        role=${W(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${W(this.name)}
          library=${W(this.library)}
          src=${W(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `;
  }
};
L.styles = [Et, Ao];
L.dependencies = { "sl-icon": F };
u([
  Q(".icon-button")
], L.prototype, "button", 2);
u([
  N()
], L.prototype, "hasFocus", 2);
u([
  f()
], L.prototype, "name", 2);
u([
  f()
], L.prototype, "library", 2);
u([
  f()
], L.prototype, "src", 2);
u([
  f()
], L.prototype, "href", 2);
u([
  f()
], L.prototype, "target", 2);
u([
  f()
], L.prototype, "download", 2);
u([
  f()
], L.prototype, "label", 2);
u([
  f({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", 2);
const we = /* @__PURE__ */ new Set(), $t = /* @__PURE__ */ new Map();
let ft, Le = "ltr", Te = "en";
const Os = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (Os) {
  const e = new MutationObserver(Ps);
  Le = document.documentElement.dir || "ltr", Te = document.documentElement.lang || navigator.language, e.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function zs(...e) {
  e.map((t) => {
    const s = t.$code.toLowerCase();
    $t.has(s) ? $t.set(s, Object.assign(Object.assign({}, $t.get(s)), t)) : $t.set(s, t), ft || (ft = t);
  }), Ps();
}
function Ps() {
  Os && (Le = document.documentElement.dir || "ltr", Te = document.documentElement.lang || navigator.language), [...we.keys()].map((e) => {
    typeof e.requestUpdate == "function" && e.requestUpdate();
  });
}
let Xo = class {
  constructor(t) {
    this.host = t, this.host.addController(this);
  }
  hostConnected() {
    we.add(this.host);
  }
  hostDisconnected() {
    we.delete(this.host);
  }
  dir() {
    return `${this.host.dir || Le}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || Te}`.toLowerCase();
  }
  getTranslationData(t) {
    var s, o;
    const l = new Intl.Locale(t.replace(/_/g, "-")), i = l == null ? void 0 : l.language.toLowerCase(), r = (o = (s = l == null ? void 0 : l.region) === null || s === void 0 ? void 0 : s.toLowerCase()) !== null && o !== void 0 ? o : "", n = $t.get(`${i}-${r}`), a = $t.get(i);
    return { locale: l, language: i, region: r, primary: n, secondary: a };
  }
  exists(t, s) {
    var o;
    const { primary: l, secondary: i } = this.getTranslationData((o = s.lang) !== null && o !== void 0 ? o : this.lang());
    return s = Object.assign({ includeFallback: !1 }, s), !!(l && l[t] || i && i[t] || s.includeFallback && ft && ft[t]);
  }
  term(t, ...s) {
    const { primary: o, secondary: l } = this.getTranslationData(this.lang());
    let i;
    if (o && o[t])
      i = o[t];
    else if (l && l[t])
      i = l[t];
    else if (ft && ft[t])
      i = ft[t];
    else
      return console.error(`No translation found for: ${String(t)}`), String(t);
    return typeof i == "function" ? i(...s) : i;
  }
  date(t, s) {
    return t = new Date(t), new Intl.DateTimeFormat(this.lang(), s).format(t);
  }
  number(t, s) {
    return t = Number(t), isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), s).format(t);
  }
  relativeTime(t, s, o) {
    return new Intl.RelativeTimeFormat(this.lang(), o).format(t, s);
  }
};
var Ls = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (e, t) => `Go to slide ${e} of ${t}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (e) => e === 0 ? "No options selected" : e === 1 ? "1 option selected" : `${e} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (e) => `Slide ${e}`,
  toggleColorFormat: "Toggle color format"
};
zs(Ls);
var Zo = Ls, le = class extends Xo {
};
zs(Zo);
var _t = class extends K {
  constructor() {
    super(...arguments), this.localize = new le(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return O`
      <span
        part="base"
        class=${bt({
      tag: !0,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? O`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
_t.styles = [Et, $o];
_t.dependencies = { "sl-icon-button": L };
u([
  f({ reflect: !0 })
], _t.prototype, "variant", 2);
u([
  f({ reflect: !0 })
], _t.prototype, "size", 2);
u([
  f({ type: Boolean, reflect: !0 })
], _t.prototype, "pill", 2);
u([
  f({ type: Boolean })
], _t.prototype, "removable", 2);
var Go = ct`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;
function Jo(e, t) {
  return {
    top: Math.round(e.getBoundingClientRect().top - t.getBoundingClientRect().top),
    left: Math.round(e.getBoundingClientRect().left - t.getBoundingClientRect().left)
  };
}
function Qo(e, t, s = "vertical", o = "smooth") {
  const l = Jo(e, t), i = l.top + t.scrollTop, r = l.left + t.scrollLeft, n = t.scrollLeft, a = t.scrollLeft + t.offsetWidth, c = t.scrollTop, h = t.scrollTop + t.offsetHeight;
  (s === "horizontal" || s === "both") && (r < n ? t.scrollTo({ left: r, behavior: o }) : r + e.clientWidth > a && t.scrollTo({ left: r - t.offsetWidth + e.clientWidth, behavior: o })), (s === "vertical" || s === "both") && (i < c ? t.scrollTo({ top: i, behavior: o }) : i + e.clientHeight > h && t.scrollTo({ top: i - t.offsetHeight + e.clientHeight, behavior: o }));
}
var tl = ct`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`, el = ct`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;
const rt = Math.min, z = Math.max, Qt = Math.round, qt = Math.floor, q = (e) => ({
  x: e,
  y: e
}), sl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ol = {
  start: "end",
  end: "start"
};
function _e(e, t, s) {
  return z(e, rt(t, s));
}
function kt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nt(e) {
  return e.split("-")[0];
}
function Ot(e) {
  return e.split("-")[1];
}
function Ts(e) {
  return e === "x" ? "y" : "x";
}
function Re(e) {
  return e === "y" ? "height" : "width";
}
const ll = /* @__PURE__ */ new Set(["top", "bottom"]);
function J(e) {
  return ll.has(nt(e)) ? "y" : "x";
}
function De(e) {
  return Ts(J(e));
}
function il(e, t, s) {
  s === void 0 && (s = !1);
  const o = Ot(e), l = De(e), i = Re(l);
  let r = l === "x" ? o === (s ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (r = te(r)), [r, te(r)];
}
function rl(e) {
  const t = te(e);
  return [xe(e), t, xe(t)];
}
function xe(e) {
  return e.replace(/start|end/g, (t) => ol[t]);
}
const ls = ["left", "right"], is = ["right", "left"], nl = ["top", "bottom"], al = ["bottom", "top"];
function cl(e, t, s) {
  switch (e) {
    case "top":
    case "bottom":
      return s ? t ? is : ls : t ? ls : is;
    case "left":
    case "right":
      return t ? nl : al;
    default:
      return [];
  }
}
function hl(e, t, s, o) {
  const l = Ot(e);
  let i = cl(nt(e), s === "start", o);
  return l && (i = i.map((r) => r + "-" + l), t && (i = i.concat(i.map(xe)))), i;
}
function te(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sl[t]);
}
function dl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rs(e) {
  return typeof e != "number" ? dl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ee(e) {
  const {
    x: t,
    y: s,
    width: o,
    height: l
  } = e;
  return {
    width: o,
    height: l,
    top: s,
    left: t,
    right: t + o,
    bottom: s + l,
    x: t,
    y: s
  };
}
function rs(e, t, s) {
  let {
    reference: o,
    floating: l
  } = e;
  const i = J(t), r = De(t), n = Re(r), a = nt(t), c = i === "y", h = o.x + o.width / 2 - l.width / 2, d = o.y + o.height / 2 - l.height / 2, m = o[n] / 2 - l[n] / 2;
  let p;
  switch (a) {
    case "top":
      p = {
        x: h,
        y: o.y - l.height
      };
      break;
    case "bottom":
      p = {
        x: h,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: o.x - l.width,
        y: d
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ot(t)) {
    case "start":
      p[r] -= m * (s && c ? -1 : 1);
      break;
    case "end":
      p[r] += m * (s && c ? -1 : 1);
      break;
  }
  return p;
}
const ul = async (e, t, s) => {
  const {
    placement: o = "bottom",
    strategy: l = "absolute",
    middleware: i = [],
    platform: r
  } = s, n = i.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let c = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: l
  }), {
    x: h,
    y: d
  } = rs(c, o, a), m = o, p = {}, g = 0;
  for (let v = 0; v < n.length; v++) {
    const {
      name: w,
      fn: b
    } = n[v], {
      x: _,
      y: x,
      data: S,
      reset: A
    } = await b({
      x: h,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: l,
      middlewareData: p,
      rects: c,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = _ ?? h, d = x ?? d, p = {
      ...p,
      [w]: {
        ...p[w],
        ...S
      }
    }, A && g <= 50 && (g++, typeof A == "object" && (A.placement && (m = A.placement), A.rects && (c = A.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: l
    }) : A.rects), {
      x: h,
      y: d
    } = rs(c, m, a)), v = -1);
  }
  return {
    x: h,
    y: d,
    placement: m,
    strategy: l,
    middlewareData: p
  };
};
async function Me(e, t) {
  var s;
  t === void 0 && (t = {});
  const {
    x: o,
    y: l,
    platform: i,
    rects: r,
    elements: n,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = kt(t, e), g = Rs(p), w = n[m ? d === "floating" ? "reference" : "floating" : d], b = ee(await i.getClippingRect({
    element: (s = await (i.isElement == null ? void 0 : i.isElement(w))) == null || s ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(n.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: a
  })), _ = d === "floating" ? {
    x: o,
    y: l,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(n.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = ee(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: n,
    rect: _,
    offsetParent: x,
    strategy: a
  }) : _);
  return {
    top: (b.top - A.top + g.top) / S.y,
    bottom: (A.bottom - b.bottom + g.bottom) / S.y,
    left: (b.left - A.left + g.left) / S.x,
    right: (A.right - b.right + g.right) / S.x
  };
}
const pl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: s,
      y: o,
      placement: l,
      rects: i,
      platform: r,
      elements: n,
      middlewareData: a
    } = t, {
      element: c,
      padding: h = 0
    } = kt(e, t) || {};
    if (c == null)
      return {};
    const d = Rs(h), m = {
      x: s,
      y: o
    }, p = De(l), g = Re(p), v = await r.getDimensions(c), w = p === "y", b = w ? "top" : "left", _ = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", S = i.reference[g] + i.reference[p] - m[p] - i.floating[g], A = m[p] - i.reference[p], M = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let E = M ? M[x] : 0;
    (!E || !await (r.isElement == null ? void 0 : r.isElement(M))) && (E = n.floating[x] || i.floating[g]);
    const Z = S / 2 - A / 2, U = E / 2 - v[g] / 2 - 1, T = rt(d[b], U), tt = rt(d[_], U), j = T, et = E - v[g] - tt, k = E / 2 - v[g] / 2 + Z, ut = _e(j, k, et), G = !a.arrow && Ot(l) != null && k !== ut && i.reference[g] / 2 - (k < j ? T : tt) - v[g] / 2 < 0, V = G ? k < j ? k - j : k - et : 0;
    return {
      [p]: m[p] + V,
      data: {
        [p]: ut,
        centerOffset: k - ut - V,
        ...G && {
          alignmentOffset: V
        }
      },
      reset: G
    };
  }
}), fl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var s, o;
      const {
        placement: l,
        middlewareData: i,
        rects: r,
        initialPlacement: n,
        platform: a,
        elements: c
      } = t, {
        mainAxis: h = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...w
      } = kt(e, t);
      if ((s = i.arrow) != null && s.alignmentOffset)
        return {};
      const b = nt(l), _ = J(n), x = nt(n) === n, S = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), A = m || (x || !v ? [te(n)] : rl(n)), M = g !== "none";
      !m && M && A.push(...hl(n, v, g, S));
      const E = [n, ...A], Z = await Me(t, w), U = [];
      let T = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (h && U.push(Z[b]), d) {
        const k = il(l, r, S);
        U.push(Z[k[0]], Z[k[1]]);
      }
      if (T = [...T, {
        placement: l,
        overflows: U
      }], !U.every((k) => k <= 0)) {
        var tt, j;
        const k = (((tt = i.flip) == null ? void 0 : tt.index) || 0) + 1, ut = E[k];
        if (ut && (!(d === "alignment" ? _ !== J(ut) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((B) => B.overflows[0] > 0 && J(B.placement) === _)))
          return {
            data: {
              index: k,
              overflows: T
            },
            reset: {
              placement: ut
            }
          };
        let G = (j = T.filter((V) => V.overflows[0] <= 0).sort((V, B) => V.overflows[1] - B.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!G)
          switch (p) {
            case "bestFit": {
              var et;
              const V = (et = T.filter((B) => {
                if (M) {
                  const st = J(B.placement);
                  return st === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  st === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((st) => st > 0).reduce((st, Ks) => st + Ks, 0)]).sort((B, st) => B[1] - st[1])[0]) == null ? void 0 : et[0];
              V && (G = V);
              break;
            }
            case "initialPlacement":
              G = n;
              break;
          }
        if (l !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
}, ml = /* @__PURE__ */ new Set(["left", "top"]);
async function gl(e, t) {
  const {
    placement: s,
    platform: o,
    elements: l
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(l.floating)), r = nt(s), n = Ot(s), a = J(s) === "y", c = ml.has(r) ? -1 : 1, h = i && a ? -1 : 1, d = kt(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return n && typeof g == "number" && (p = n === "end" ? g * -1 : g), a ? {
    x: p * h,
    y: m * c
  } : {
    x: m * c,
    y: p * h
  };
}
const vl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var s, o;
      const {
        x: l,
        y: i,
        placement: r,
        middlewareData: n
      } = t, a = await gl(t, e);
      return r === ((s = n.offset) == null ? void 0 : s.placement) && (o = n.arrow) != null && o.alignmentOffset ? {} : {
        x: l + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: r
        }
      };
    }
  };
}, bl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: s,
        y: o,
        placement: l
      } = t, {
        mainAxis: i = !0,
        crossAxis: r = !1,
        limiter: n = {
          fn: (w) => {
            let {
              x: b,
              y: _
            } = w;
            return {
              x: b,
              y: _
            };
          }
        },
        ...a
      } = kt(e, t), c = {
        x: s,
        y: o
      }, h = await Me(t, a), d = J(nt(l)), m = Ts(d);
      let p = c[m], g = c[d];
      if (i) {
        const w = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", _ = p + h[w], x = p - h[b];
        p = _e(_, p, x);
      }
      if (r) {
        const w = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", _ = g + h[w], x = g - h[b];
        g = _e(_, g, x);
      }
      const v = n.fn({
        ...t,
        [m]: p,
        [d]: g
      });
      return {
        ...v,
        data: {
          x: v.x - s,
          y: v.y - o,
          enabled: {
            [m]: i,
            [d]: r
          }
        }
      };
    }
  };
}, yl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var s, o;
      const {
        placement: l,
        rects: i,
        platform: r,
        elements: n
      } = t, {
        apply: a = () => {
        },
        ...c
      } = kt(e, t), h = await Me(t, c), d = nt(l), m = Ot(l), p = J(l) === "y", {
        width: g,
        height: v
      } = i.floating;
      let w, b;
      d === "top" || d === "bottom" ? (w = d, b = m === (await (r.isRTL == null ? void 0 : r.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (b = d, w = m === "end" ? "top" : "bottom");
      const _ = v - h.top - h.bottom, x = g - h.left - h.right, S = rt(v - h[w], _), A = rt(g - h[b], x), M = !t.middlewareData.shift;
      let E = S, Z = A;
      if ((s = t.middlewareData.shift) != null && s.enabled.x && (Z = x), (o = t.middlewareData.shift) != null && o.enabled.y && (E = _), M && !m) {
        const T = z(h.left, 0), tt = z(h.right, 0), j = z(h.top, 0), et = z(h.bottom, 0);
        p ? Z = g - 2 * (T !== 0 || tt !== 0 ? T + tt : z(h.left, h.right)) : E = v - 2 * (j !== 0 || et !== 0 ? j + et : z(h.top, h.bottom));
      }
      await a({
        ...t,
        availableWidth: Z,
        availableHeight: E
      });
      const U = await r.getDimensions(n.floating);
      return g !== U.width || v !== U.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ie() {
  return typeof window < "u";
}
function zt(e) {
  return Ds(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function P(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
  var t;
  return (t = (Ds(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ds(e) {
  return ie() ? e instanceof Node || e instanceof P(e).Node : !1;
}
function I(e) {
  return ie() ? e instanceof Element || e instanceof P(e).Element : !1;
}
function Y(e) {
  return ie() ? e instanceof HTMLElement || e instanceof P(e).HTMLElement : !1;
}
function ns(e) {
  return !ie() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof P(e).ShadowRoot;
}
const wl = /* @__PURE__ */ new Set(["inline", "contents"]);
function jt(e) {
  const {
    overflow: t,
    overflowX: s,
    overflowY: o,
    display: l
  } = H(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + s) && !wl.has(l);
}
const _l = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xl(e) {
  return _l.has(zt(e));
}
const $l = [":popover-open", ":modal"];
function re(e) {
  return $l.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Al = ["transform", "translate", "scale", "rotate", "perspective"], Cl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Sl = ["paint", "layout", "strict", "content"];
function ne(e) {
  const t = Ve(), s = I(e) ? H(e) : e;
  return Al.some((o) => s[o] ? s[o] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !t && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !t && (s.filter ? s.filter !== "none" : !1) || Cl.some((o) => (s.willChange || "").includes(o)) || Sl.some((o) => (s.contain || "").includes(o));
}
function El(e) {
  let t = at(e);
  for (; Y(t) && !St(t); ) {
    if (ne(t))
      return t;
    if (re(t))
      return null;
    t = at(t);
  }
  return null;
}
function Ve() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const kl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function St(e) {
  return kl.has(zt(e));
}
function H(e) {
  return P(e).getComputedStyle(e);
}
function ae(e) {
  return I(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function at(e) {
  if (zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ns(e) && e.host || // Fallback.
    X(e)
  );
  return ns(t) ? t.host : t;
}
function Ms(e) {
  const t = at(e);
  return St(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Y(t) && jt(t) ? t : Ms(t);
}
function Ft(e, t, s) {
  var o;
  t === void 0 && (t = []), s === void 0 && (s = !0);
  const l = Ms(e), i = l === ((o = e.ownerDocument) == null ? void 0 : o.body), r = P(l);
  if (i) {
    const n = $e(r);
    return t.concat(r, r.visualViewport || [], jt(l) ? l : [], n && s ? Ft(n) : []);
  }
  return t.concat(l, Ft(l, [], s));
}
function $e(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vs(e) {
  const t = H(e);
  let s = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const l = Y(e), i = l ? e.offsetWidth : s, r = l ? e.offsetHeight : o, n = Qt(s) !== i || Qt(o) !== r;
  return n && (s = i, o = r), {
    width: s,
    height: o,
    $: n
  };
}
function Be(e) {
  return I(e) ? e : e.contextElement;
}
function At(e) {
  const t = Be(e);
  if (!Y(t))
    return q(1);
  const s = t.getBoundingClientRect(), {
    width: o,
    height: l,
    $: i
  } = Vs(t);
  let r = (i ? Qt(s.width) : s.width) / o, n = (i ? Qt(s.height) : s.height) / l;
  return (!r || !Number.isFinite(r)) && (r = 1), (!n || !Number.isFinite(n)) && (n = 1), {
    x: r,
    y: n
  };
}
const Ol = /* @__PURE__ */ q(0);
function Bs(e) {
  const t = P(e);
  return !Ve() || !t.visualViewport ? Ol : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function zl(e, t, s) {
  return t === void 0 && (t = !1), !s || t && s !== P(e) ? !1 : t;
}
function yt(e, t, s, o) {
  t === void 0 && (t = !1), s === void 0 && (s = !1);
  const l = e.getBoundingClientRect(), i = Be(e);
  let r = q(1);
  t && (o ? I(o) && (r = At(o)) : r = At(e));
  const n = zl(i, s, o) ? Bs(i) : q(0);
  let a = (l.left + n.x) / r.x, c = (l.top + n.y) / r.y, h = l.width / r.x, d = l.height / r.y;
  if (i) {
    const m = P(i), p = o && I(o) ? P(o) : o;
    let g = m, v = $e(g);
    for (; v && o && p !== g; ) {
      const w = At(v), b = v.getBoundingClientRect(), _ = H(v), x = b.left + (v.clientLeft + parseFloat(_.paddingLeft)) * w.x, S = b.top + (v.clientTop + parseFloat(_.paddingTop)) * w.y;
      a *= w.x, c *= w.y, h *= w.x, d *= w.y, a += x, c += S, g = P(v), v = $e(g);
    }
  }
  return ee({
    width: h,
    height: d,
    x: a,
    y: c
  });
}
function Ie(e, t) {
  const s = ae(e).scrollLeft;
  return t ? t.left + s : yt(X(e)).left + s;
}
function Is(e, t, s) {
  s === void 0 && (s = !1);
  const o = e.getBoundingClientRect(), l = o.left + t.scrollLeft - (s ? 0 : (
    // RTL <body> scrollbar.
    Ie(e, o)
  )), i = o.top + t.scrollTop;
  return {
    x: l,
    y: i
  };
}
function Pl(e) {
  let {
    elements: t,
    rect: s,
    offsetParent: o,
    strategy: l
  } = e;
  const i = l === "fixed", r = X(o), n = t ? re(t.floating) : !1;
  if (o === r || n && i)
    return s;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = q(1);
  const h = q(0), d = Y(o);
  if ((d || !d && !i) && ((zt(o) !== "body" || jt(r)) && (a = ae(o)), Y(o))) {
    const p = yt(o);
    c = At(o), h.x = p.x + o.clientLeft, h.y = p.y + o.clientTop;
  }
  const m = r && !d && !i ? Is(r, a, !0) : q(0);
  return {
    width: s.width * c.x,
    height: s.height * c.y,
    x: s.x * c.x - a.scrollLeft * c.x + h.x + m.x,
    y: s.y * c.y - a.scrollTop * c.y + h.y + m.y
  };
}
function Ll(e) {
  return Array.from(e.getClientRects());
}
function Tl(e) {
  const t = X(e), s = ae(e), o = e.ownerDocument.body, l = z(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = z(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -s.scrollLeft + Ie(e);
  const n = -s.scrollTop;
  return H(o).direction === "rtl" && (r += z(t.clientWidth, o.clientWidth) - l), {
    width: l,
    height: i,
    x: r,
    y: n
  };
}
function Rl(e, t) {
  const s = P(e), o = X(e), l = s.visualViewport;
  let i = o.clientWidth, r = o.clientHeight, n = 0, a = 0;
  if (l) {
    i = l.width, r = l.height;
    const c = Ve();
    (!c || c && t === "fixed") && (n = l.offsetLeft, a = l.offsetTop);
  }
  return {
    width: i,
    height: r,
    x: n,
    y: a
  };
}
const Dl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ml(e, t) {
  const s = yt(e, !0, t === "fixed"), o = s.top + e.clientTop, l = s.left + e.clientLeft, i = Y(e) ? At(e) : q(1), r = e.clientWidth * i.x, n = e.clientHeight * i.y, a = l * i.x, c = o * i.y;
  return {
    width: r,
    height: n,
    x: a,
    y: c
  };
}
function as(e, t, s) {
  let o;
  if (t === "viewport")
    o = Rl(e, s);
  else if (t === "document")
    o = Tl(X(e));
  else if (I(t))
    o = Ml(t, s);
  else {
    const l = Bs(e);
    o = {
      x: t.x - l.x,
      y: t.y - l.y,
      width: t.width,
      height: t.height
    };
  }
  return ee(o);
}
function Hs(e, t) {
  const s = at(e);
  return s === t || !I(s) || St(s) ? !1 : H(s).position === "fixed" || Hs(s, t);
}
function Vl(e, t) {
  const s = t.get(e);
  if (s)
    return s;
  let o = Ft(e, [], !1).filter((n) => I(n) && zt(n) !== "body"), l = null;
  const i = H(e).position === "fixed";
  let r = i ? at(e) : e;
  for (; I(r) && !St(r); ) {
    const n = H(r), a = ne(r);
    !a && n.position === "fixed" && (l = null), (i ? !a && !l : !a && n.position === "static" && !!l && Dl.has(l.position) || jt(r) && !a && Hs(e, r)) ? o = o.filter((h) => h !== r) : l = n, r = at(r);
  }
  return t.set(e, o), o;
}
function Bl(e) {
  let {
    element: t,
    boundary: s,
    rootBoundary: o,
    strategy: l
  } = e;
  const r = [...s === "clippingAncestors" ? re(t) ? [] : Vl(t, this._c) : [].concat(s), o], n = r[0], a = r.reduce((c, h) => {
    const d = as(t, h, l);
    return c.top = z(d.top, c.top), c.right = rt(d.right, c.right), c.bottom = rt(d.bottom, c.bottom), c.left = z(d.left, c.left), c;
  }, as(t, n, l));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Il(e) {
  const {
    width: t,
    height: s
  } = Vs(e);
  return {
    width: t,
    height: s
  };
}
function Hl(e, t, s) {
  const o = Y(t), l = X(t), i = s === "fixed", r = yt(e, !0, i, t);
  let n = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = q(0);
  function c() {
    a.x = Ie(l);
  }
  if (o || !o && !i)
    if ((zt(t) !== "body" || jt(l)) && (n = ae(t)), o) {
      const p = yt(t, !0, i, t);
      a.x = p.x + t.clientLeft, a.y = p.y + t.clientTop;
    } else l && c();
  i && !o && l && c();
  const h = l && !o && !i ? Is(l, n) : q(0), d = r.left + n.scrollLeft - a.x - h.x, m = r.top + n.scrollTop - a.y - h.y;
  return {
    x: d,
    y: m,
    width: r.width,
    height: r.height
  };
}
function me(e) {
  return H(e).position === "static";
}
function cs(e, t) {
  if (!Y(e) || H(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let s = e.offsetParent;
  return X(e) === s && (s = s.ownerDocument.body), s;
}
function Ns(e, t) {
  const s = P(e);
  if (re(e))
    return s;
  if (!Y(e)) {
    let l = at(e);
    for (; l && !St(l); ) {
      if (I(l) && !me(l))
        return l;
      l = at(l);
    }
    return s;
  }
  let o = cs(e, t);
  for (; o && xl(o) && me(o); )
    o = cs(o, t);
  return o && St(o) && me(o) && !ne(o) ? s : o || El(e) || s;
}
const Nl = async function(e) {
  const t = this.getOffsetParent || Ns, s = this.getDimensions, o = await s(e.floating);
  return {
    reference: Hl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Fl(e) {
  return H(e).direction === "rtl";
}
const Zt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Pl,
  getDocumentElement: X,
  getClippingRect: Bl,
  getOffsetParent: Ns,
  getElementRects: Nl,
  getClientRects: Ll,
  getDimensions: Il,
  getScale: At,
  isElement: I,
  isRTL: Fl
};
function Fs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ul(e, t) {
  let s = null, o;
  const l = X(e);
  function i() {
    var n;
    clearTimeout(o), (n = s) == null || n.disconnect(), s = null;
  }
  function r(n, a) {
    n === void 0 && (n = !1), a === void 0 && (a = 1), i();
    const c = e.getBoundingClientRect(), {
      left: h,
      top: d,
      width: m,
      height: p
    } = c;
    if (n || t(), !m || !p)
      return;
    const g = qt(d), v = qt(l.clientWidth - (h + m)), w = qt(l.clientHeight - (d + p)), b = qt(h), x = {
      rootMargin: -g + "px " + -v + "px " + -w + "px " + -b + "px",
      threshold: z(0, rt(1, a)) || 1
    };
    let S = !0;
    function A(M) {
      const E = M[0].intersectionRatio;
      if (E !== a) {
        if (!S)
          return r();
        E ? r(!1, E) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Fs(c, e.getBoundingClientRect()) && r(), S = !1;
    }
    try {
      s = new IntersectionObserver(A, {
        ...x,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      s = new IntersectionObserver(A, x);
    }
    s.observe(e);
  }
  return r(!0), i;
}
function jl(e, t, s, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: i = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: n = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = Be(e), h = l || i ? [...c ? Ft(c) : [], ...Ft(t)] : [];
  h.forEach((b) => {
    l && b.addEventListener("scroll", s, {
      passive: !0
    }), i && b.addEventListener("resize", s);
  });
  const d = c && n ? Ul(c, s) : null;
  let m = -1, p = null;
  r && (p = new ResizeObserver((b) => {
    let [_] = b;
    _ && _.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), s();
  }), c && !a && p.observe(c), p.observe(t));
  let g, v = a ? yt(e) : null;
  a && w();
  function w() {
    const b = yt(e);
    v && !Fs(v, b) && s(), v = b, g = requestAnimationFrame(w);
  }
  return s(), () => {
    var b;
    h.forEach((_) => {
      l && _.removeEventListener("scroll", s), i && _.removeEventListener("resize", s);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, a && cancelAnimationFrame(g);
  };
}
const Wl = vl, ql = bl, Yl = fl, hs = yl, Kl = pl, Xl = (e, t, s) => {
  const o = /* @__PURE__ */ new Map(), l = {
    platform: Zt,
    ...s
  }, i = {
    ...l.platform,
    _c: o
  };
  return ul(e, t, {
    ...l,
    platform: i
  });
};
function Zl(e) {
  return Gl(e);
}
function ge(e) {
  return e.assignedSlot ? e.assignedSlot : e.parentNode instanceof ShadowRoot ? e.parentNode.host : e.parentNode;
}
function Gl(e) {
  for (let t = e; t; t = ge(t)) if (t instanceof Element && getComputedStyle(t).display === "none") return null;
  for (let t = ge(e); t; t = ge(t)) {
    if (!(t instanceof Element)) continue;
    const s = getComputedStyle(t);
    if (s.display !== "contents" && (s.position !== "static" || ne(s) || t.tagName === "BODY"))
      return t;
  }
  return null;
}
function Jl(e) {
  return e !== null && typeof e == "object" && "getBoundingClientRect" in e && ("contextElement" in e ? e.contextElement instanceof Element : !0);
}
var $ = class extends K {
  constructor() {
    super(...arguments), this.localize = new le(this), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const e = this.anchorEl.getBoundingClientRect(), t = this.popup.getBoundingClientRect(), s = this.placement.includes("top") || this.placement.includes("bottom");
        let o = 0, l = 0, i = 0, r = 0, n = 0, a = 0, c = 0, h = 0;
        s ? e.top < t.top ? (o = e.left, l = e.bottom, i = e.right, r = e.bottom, n = t.left, a = t.top, c = t.right, h = t.top) : (o = t.left, l = t.bottom, i = t.right, r = t.bottom, n = e.left, a = e.top, c = e.right, h = e.top) : e.left < t.left ? (o = e.right, l = e.top, i = t.left, r = t.top, n = e.right, a = e.bottom, c = t.left, h = t.bottom) : (o = t.right, l = t.top, i = e.left, r = e.top, n = t.right, a = t.bottom, c = e.left, h = e.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${o}px`), this.style.setProperty("--hover-bridge-top-left-y", `${l}px`), this.style.setProperty("--hover-bridge-top-right-x", `${i}px`), this.style.setProperty("--hover-bridge-top-right-y", `${r}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${n}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${a}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${h}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(e) {
    super.updated(e), e.has("active") && (this.active ? this.start() : this.stop()), e.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if (await this.stop(), this.anchor && typeof this.anchor == "string") {
      const e = this.getRootNode();
      this.anchorEl = e.getElementById(this.anchor);
    } else this.anchor instanceof Element || Jl(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.active && this.start();
  }
  start() {
    !this.anchorEl || !this.active || (this.cleanup = jl(this.anchorEl, this.popup, () => {
      this.reposition();
    }));
  }
  async stop() {
    return new Promise((e) => {
      this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => e())) : e();
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl)
      return;
    const e = [
      // The offset middleware goes first
      Wl({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? e.push(
      hs({
        apply: ({ rects: s }) => {
          const o = this.sync === "width" || this.sync === "both", l = this.sync === "height" || this.sync === "both";
          this.popup.style.width = o ? `${s.reference.width}px` : "", this.popup.style.height = l ? `${s.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && e.push(
      Yl({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && e.push(
      ql({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? e.push(
      hs({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: s, availableHeight: o }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${o}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${s}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && e.push(
      Kl({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const t = this.strategy === "absolute" ? (s) => Zt.getOffsetParent(s, Zl) : Zt.getOffsetParent;
    Xl(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: e,
      strategy: this.strategy,
      platform: oe(wt({}, Zt), {
        getOffsetParent: t
      })
    }).then(({ x: s, y: o, middlewareData: l, placement: i }) => {
      const r = this.localize.dir() === "rtl", n = { top: "bottom", right: "left", bottom: "top", left: "right" }[i.split("-")[0]];
      if (this.setAttribute("data-current-placement", i), Object.assign(this.popup.style, {
        left: `${s}px`,
        top: `${o}px`
      }), this.arrow) {
        const a = l.arrow.x, c = l.arrow.y;
        let h = "", d = "", m = "", p = "";
        if (this.arrowPlacement === "start") {
          const g = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          h = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", d = r ? g : "", p = r ? "" : g;
        } else if (this.arrowPlacement === "end") {
          const g = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          d = r ? "" : g, p = r ? g : "", m = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else this.arrowPlacement === "center" ? (p = typeof a == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", h = typeof c == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (p = typeof a == "number" ? `${a}px` : "", h = typeof c == "number" ? `${c}px` : "");
        Object.assign(this.arrowEl.style, {
          top: h,
          right: d,
          bottom: m,
          left: p,
          [n]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    }), requestAnimationFrame(() => this.updateHoverBridge()), this.emit("sl-reposition");
  }
  render() {
    return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${bt({
      "popup-hover-bridge": !0,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${bt({
      popup: !0,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? O`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
$.styles = [Et, el];
u([
  Q(".popup")
], $.prototype, "popup", 2);
u([
  Q(".popup__arrow")
], $.prototype, "arrowEl", 2);
u([
  f()
], $.prototype, "anchor", 2);
u([
  f({ type: Boolean, reflect: !0 })
], $.prototype, "active", 2);
u([
  f({ reflect: !0 })
], $.prototype, "placement", 2);
u([
  f({ reflect: !0 })
], $.prototype, "strategy", 2);
u([
  f({ type: Number })
], $.prototype, "distance", 2);
u([
  f({ type: Number })
], $.prototype, "skidding", 2);
u([
  f({ type: Boolean })
], $.prototype, "arrow", 2);
u([
  f({ attribute: "arrow-placement" })
], $.prototype, "arrowPlacement", 2);
u([
  f({ attribute: "arrow-padding", type: Number })
], $.prototype, "arrowPadding", 2);
u([
  f({ type: Boolean })
], $.prototype, "flip", 2);
u([
  f({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (e) => e.split(" ").map((t) => t.trim()).filter((t) => t !== ""),
      toAttribute: (e) => e.join(" ")
    }
  })
], $.prototype, "flipFallbackPlacements", 2);
u([
  f({ attribute: "flip-fallback-strategy" })
], $.prototype, "flipFallbackStrategy", 2);
u([
  f({ type: Object })
], $.prototype, "flipBoundary", 2);
u([
  f({ attribute: "flip-padding", type: Number })
], $.prototype, "flipPadding", 2);
u([
  f({ type: Boolean })
], $.prototype, "shift", 2);
u([
  f({ type: Object })
], $.prototype, "shiftBoundary", 2);
u([
  f({ attribute: "shift-padding", type: Number })
], $.prototype, "shiftPadding", 2);
u([
  f({ attribute: "auto-size" })
], $.prototype, "autoSize", 2);
u([
  f()
], $.prototype, "sync", 2);
u([
  f({ type: Object })
], $.prototype, "autoSizeBoundary", 2);
u([
  f({ attribute: "auto-size-padding", type: Number })
], $.prototype, "autoSizePadding", 2);
u([
  f({ attribute: "hover-bridge", type: Boolean })
], $.prototype, "hoverBridge", 2);
var Tt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakSet(), Yt = /* @__PURE__ */ new WeakMap(), Ql = class {
  constructor(e, t) {
    this.handleFormData = (s) => {
      const o = this.options.disabled(this.host), l = this.options.name(this.host), i = this.options.value(this.host), r = this.host.tagName.toLowerCase() === "sl-button";
      this.host.isConnected && !o && !r && typeof l == "string" && l.length > 0 && typeof i < "u" && (Array.isArray(i) ? i.forEach((n) => {
        s.formData.append(l, n.toString());
      }) : s.formData.append(l, i.toString()));
    }, this.handleFormSubmit = (s) => {
      var o;
      const l = this.options.disabled(this.host), i = this.options.reportValidity;
      this.form && !this.form.noValidate && ((o = Tt.get(this.form)) == null || o.forEach((r) => {
        this.setUserInteracted(r, !0);
      })), this.form && !this.form.noValidate && !l && !i(this.host) && (s.preventDefault(), s.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), Yt.set(this.host, []);
    }, this.handleInteraction = (s) => {
      const o = Yt.get(this.host);
      o.includes(s.type) || o.push(s.type), o.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const s = this.form.querySelectorAll("*");
        for (const o of s)
          if (typeof o.checkValidity == "function" && !o.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const s = this.form.querySelectorAll("*");
        for (const o of s)
          if (typeof o.reportValidity == "function" && !o.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = e).addController(this), this.options = wt({
      form: (s) => {
        const o = s.form;
        if (o) {
          const i = s.getRootNode().querySelector(`#${o}`);
          if (i)
            return i;
        }
        return s.closest("form");
      },
      name: (s) => s.name,
      value: (s) => s.value,
      defaultValue: (s) => s.defaultValue,
      disabled: (s) => {
        var o;
        return (o = s.disabled) != null ? o : !1;
      },
      reportValidity: (s) => typeof s.reportValidity == "function" ? s.reportValidity() : !0,
      checkValidity: (s) => typeof s.checkValidity == "function" ? s.checkValidity() : !0,
      setValue: (s, o) => s.value = o,
      assumeInteractionOn: ["sl-input"]
    }, t);
  }
  hostConnected() {
    const e = this.options.form(this.host);
    e && this.attachForm(e), Yt.set(this.host, []), this.options.assumeInteractionOn.forEach((t) => {
      this.host.addEventListener(t, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), Yt.delete(this.host), this.options.assumeInteractionOn.forEach((e) => {
      this.host.removeEventListener(e, this.handleInteraction);
    });
  }
  hostUpdated() {
    const e = this.options.form(this.host);
    e || this.detachForm(), e && this.form !== e && (this.detachForm(), this.attachForm(e)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(e) {
    e ? (this.form = e, Tt.has(this.form) ? Tt.get(this.form).add(this.host) : Tt.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), Rt.has(this.form) || (Rt.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), Dt.has(this.form) || (Dt.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form) return;
    const e = Tt.get(this.form);
    e && (e.delete(this.host), e.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), Rt.has(this.form) && (this.form.reportValidity = Rt.get(this.form), Rt.delete(this.form)), Dt.has(this.form) && (this.form.checkValidity = Dt.get(this.form), Dt.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(e, t) {
    t ? ve.add(e) : ve.delete(e), e.requestUpdate();
  }
  doAction(e, t) {
    if (this.form) {
      const s = document.createElement("button");
      s.type = e, s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.clipPath = "inset(50%)", s.style.overflow = "hidden", s.style.whiteSpace = "nowrap", t && (s.name = t.name, s.value = t.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((o) => {
        t.hasAttribute(o) && s.setAttribute(o, t.getAttribute(o));
      })), this.form.append(s), s.click(), s.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var e;
    return (e = this.form) != null ? e : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(e) {
    this.doAction("reset", e);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(e) {
    this.doAction("submit", e);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(e) {
    const t = this.host, s = !!ve.has(t), o = !!t.required;
    t.toggleAttribute("data-required", o), t.toggleAttribute("data-optional", !o), t.toggleAttribute("data-invalid", !e), t.toggleAttribute("data-valid", e), t.toggleAttribute("data-user-invalid", !e && s), t.toggleAttribute("data-user-valid", e && s);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const e = this.host;
    this.setValidity(e.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(e) {
    const t = new CustomEvent("sl-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    e || t.preventDefault(), this.host.dispatchEvent(t) || e == null || e.preventDefault();
  }
}, Us = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
});
Object.freeze(oe(wt({}, Us), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(oe(wt({}, Us), {
  valid: !1,
  customError: !0
}));
var js = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new WeakMap();
function ei(e) {
  return e ?? { keyframes: [], options: { duration: 0 } };
}
function ds(e, t) {
  return t.toLowerCase() === "rtl" ? {
    keyframes: e.rtlKeyframes || e.keyframes,
    options: e.options
  } : e;
}
function Ws(e, t) {
  js.set(e, ei(t));
}
function us(e, t, s) {
  const o = ti.get(e);
  if (o != null && o[t])
    return ds(o[t], s.dir);
  const l = js.get(t);
  return l ? ds(l, s.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function ps(e, t) {
  return new Promise((s) => {
    function o(l) {
      l.target === e && (e.removeEventListener(t, o), s());
    }
    e.addEventListener(t, o);
  });
}
function fs(e, t, s) {
  return new Promise((o) => {
    if ((s == null ? void 0 : s.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const l = e.animate(t, oe(wt({}, s), {
      duration: si() ? 0 : s.duration
    }));
    l.addEventListener("cancel", o, { once: !0 }), l.addEventListener("finish", o, { once: !0 });
  });
}
function si() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ms(e) {
  return Promise.all(
    e.getAnimations().map((t) => new Promise((s) => {
      t.cancel(), requestAnimationFrame(s);
    }))
  );
}
var oi = class {
  constructor(e, ...t) {
    this.slotNames = [], this.handleSlotChange = (s) => {
      const o = s.target;
      (this.slotNames.includes("[default]") && !o.name || o.name && this.slotNames.includes(o.name)) && this.host.requestUpdate();
    }, (this.host = e).addController(this), this.slotNames = t;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((e) => {
      if (e.nodeType === e.TEXT_NODE && e.textContent.trim() !== "")
        return !0;
      if (e.nodeType === e.ELEMENT_NODE) {
        const t = e;
        if (t.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!t.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(e) {
    return this.host.querySelector(`:scope > [slot="${e}"]`) !== null;
  }
  test(e) {
    return e === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(e);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ae extends Es {
  constructor(t) {
    if (super(t), this.it = C, t.type !== Cs.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === C || t == null) return this._t = void 0, this.it = t;
    if (t === it) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const s = [t];
    return s.raw = s, this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] };
  }
}
Ae.directiveName = "unsafeHTML", Ae.resultType = 1;
const li = Ss(Ae);
var y = class extends K {
  constructor() {
    super(...arguments), this.formControlController = new Ql(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new oi(this, "help-text", "label"), this.localize = new le(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.valueHasChanged = !1, this.name = "", this._value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (e) => O`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(t) => this.handleTagRemove(t, e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `, this.handleDocumentFocusIn = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    }, this.handleDocumentKeyDown = (e) => {
      const t = e.target, s = t.closest(".select__clear") !== null, o = t.closest("sl-icon-button") !== null;
      if (!(s || o)) {
        if (e.key === "Escape" && this.open && !this.closeWatcher && (e.preventDefault(), e.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), e.key === "Enter" || e.key === " " && this.typeToSelectString === "") {
          if (e.preventDefault(), e.stopImmediatePropagation(), !this.open) {
            this.show();
            return;
          }
          this.currentOption && !this.currentOption.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
            this.emit("sl-input"), this.emit("sl-change");
          }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
          const l = this.getAllOptions(), i = l.indexOf(this.currentOption);
          let r = Math.max(0, i);
          if (e.preventDefault(), !this.open && (this.show(), this.currentOption))
            return;
          e.key === "ArrowDown" ? (r = i + 1, r > l.length - 1 && (r = 0)) : e.key === "ArrowUp" ? (r = i - 1, r < 0 && (r = l.length - 1)) : e.key === "Home" ? r = 0 : e.key === "End" && (r = l.length - 1), this.setCurrentOption(l[r]);
        }
        if (e.key && e.key.length === 1 || e.key === "Backspace") {
          const l = this.getAllOptions();
          if (e.metaKey || e.ctrlKey || e.altKey)
            return;
          if (!this.open) {
            if (e.key === "Backspace")
              return;
            this.show();
          }
          e.stopPropagation(), e.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), e.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += e.key.toLowerCase();
          for (const i of l)
            if (i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)) {
              this.setCurrentOption(i);
              break;
            }
        }
      }
    }, this.handleDocumentMouseDown = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    };
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this.multiple ? e = Array.isArray(e) ? e : e.split(" ") : e = Array.isArray(e) ? e.join(" ") : e, this._value !== e && (this.valueHasChanged = !0, this._value = e);
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), setTimeout(() => {
      this.handleDefaultSlotChange();
    }), this.open = !1;
  }
  addOpenListeners() {
    var e;
    document.addEventListener("focusin", this.handleDocumentFocusIn), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn), "CloseWatcher" in window && ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
      this.open && (this.hide(), this.displayInput.focus({ preventScroll: !0 }));
    });
  }
  removeOpenListeners() {
    var e;
    document.removeEventListener("focusin", this.handleDocumentFocusIn), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn), (e = this.closeWatcher) == null || e.destroy();
  }
  handleFocus() {
    this.hasFocus = !0, this.displayInput.setSelectionRange(0, 0), this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(e) {
    const s = e.composedPath().some((o) => o instanceof Element && o.tagName.toLowerCase() === "sl-icon-button");
    this.disabled || s || (e.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
  }
  handleComboboxKeyDown(e) {
    e.key !== "Tab" && (e.stopPropagation(), this.handleDocumentKeyDown(e));
  }
  handleClearClick(e) {
    e.stopPropagation(), this.valueHasChanged = !0, this.value !== "" && (this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
      this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  handleClearMouseDown(e) {
    e.stopPropagation(), e.preventDefault();
  }
  handleOptionClick(e) {
    const s = e.target.closest("sl-option"), o = this.value;
    s && !s.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(s) : this.setSelectedOptions(s), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== o && this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  /* @internal - used by options to update labels */
  handleDefaultSlotChange() {
    customElements.get("sl-option") || customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
    const e = this.getAllOptions(), t = this.valueHasChanged ? this.value : this.defaultValue, s = Array.isArray(t) ? t : [t], o = [];
    e.forEach((l) => o.push(l.value)), this.setSelectedOptions(e.filter((l) => s.includes(l.value)));
  }
  handleTagRemove(e, t) {
    e.stopPropagation(), this.valueHasChanged = !0, this.disabled || (this.toggleOptionSelection(t, !1), this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(e) {
    this.getAllOptions().forEach((s) => {
      s.current = !1, s.tabIndex = -1;
    }), e && (this.currentOption = e, e.current = !0, e.tabIndex = 0, e.focus());
  }
  // Sets the selected option(s)
  setSelectedOptions(e) {
    const t = this.getAllOptions(), s = Array.isArray(e) ? e : [e];
    t.forEach((o) => o.selected = !1), s.length && s.forEach((o) => o.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(e, t) {
    t === !0 || t === !1 ? e.selected = t : e.selected = !e.selected, this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var e, t, s;
    const o = this.getAllOptions();
    this.selectedOptions = o.filter((i) => i.selected);
    const l = this.valueHasChanged;
    if (this.multiple)
      this.value = this.selectedOptions.map((i) => i.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
    else {
      const i = this.selectedOptions[0];
      this.value = (e = i == null ? void 0 : i.value) != null ? e : "", this.displayLabel = (s = (t = i == null ? void 0 : i.getTextLabel) == null ? void 0 : t.call(i)) != null ? s : "";
    }
    this.valueHasChanged = l, this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((e, t) => {
      if (t < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const s = this.getTag(e, t);
        return O`<div @sl-remove=${(o) => this.handleTagRemove(o, e)}>
          ${typeof s == "string" ? li(s) : s}
        </div>`;
      } else if (t === this.maxOptionsVisible)
        return O`<sl-tag size=${this.size}>+${this.selectedOptions.length - t}</sl-tag>`;
      return O``;
    });
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleDisabledChange() {
    this.disabled && (this.open = !1, this.handleOpenChange());
  }
  attributeChangedCallback(e, t, s) {
    if (super.attributeChangedCallback(e, t, s), e === "value") {
      const o = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = o;
    }
  }
  handleValueChange() {
    if (!this.valueHasChanged) {
      const s = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = s;
    }
    const e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(e.filter((s) => t.includes(s.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("sl-show"), this.addOpenListeners(), await ms(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes: e, options: t } = us(this, "select.show", { dir: this.localize.dir() });
      await fs(this.popup.popup, e, t), this.currentOption && Qo(this.currentOption, this.listbox, "vertical", "auto"), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await ms(this);
      const { keyframes: e, options: t } = us(this, "select.hide", { dir: this.localize.dir() });
      await fs(this.popup.popup, e, t), this.listbox.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, ps(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, ps(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.valueInput.setCustomValidity(e), this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(e) {
    this.displayInput.focus(e);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), s = this.label ? !0 : !!e, o = this.helpText ? !0 : !!t, l = this.clearable && !this.disabled && this.value.length > 0, i = this.placeholder && this.value && this.value.length <= 0;
    return O`
      <div
        part="form-control"
        class=${bt({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": s,
      "form-control--has-help-text": o
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${bt({
      select: !0,
      "select--standard": !0,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": i,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? O`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${l ? O`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
y.styles = [Et, tl, Go];
y.dependencies = {
  "sl-icon": F,
  "sl-popup": $,
  "sl-tag": _t
};
u([
  Q(".select")
], y.prototype, "popup", 2);
u([
  Q(".select__combobox")
], y.prototype, "combobox", 2);
u([
  Q(".select__display-input")
], y.prototype, "displayInput", 2);
u([
  Q(".select__value-input")
], y.prototype, "valueInput", 2);
u([
  Q(".select__listbox")
], y.prototype, "listbox", 2);
u([
  N()
], y.prototype, "hasFocus", 2);
u([
  N()
], y.prototype, "displayLabel", 2);
u([
  N()
], y.prototype, "currentOption", 2);
u([
  N()
], y.prototype, "selectedOptions", 2);
u([
  N()
], y.prototype, "valueHasChanged", 2);
u([
  f()
], y.prototype, "name", 2);
u([
  N()
], y.prototype, "value", 1);
u([
  f({ attribute: "value" })
], y.prototype, "defaultValue", 2);
u([
  f({ reflect: !0 })
], y.prototype, "size", 2);
u([
  f()
], y.prototype, "placeholder", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "multiple", 2);
u([
  f({ attribute: "max-options-visible", type: Number })
], y.prototype, "maxOptionsVisible", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "disabled", 2);
u([
  f({ type: Boolean })
], y.prototype, "clearable", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "open", 2);
u([
  f({ type: Boolean })
], y.prototype, "hoist", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "filled", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "pill", 2);
u([
  f()
], y.prototype, "label", 2);
u([
  f({ reflect: !0 })
], y.prototype, "placement", 2);
u([
  f({ attribute: "help-text" })
], y.prototype, "helpText", 2);
u([
  f({ reflect: !0 })
], y.prototype, "form", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "required", 2);
u([
  f()
], y.prototype, "getTag", 2);
u([
  ht("disabled", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleDisabledChange", 1);
u([
  ht(["defaultValue", "value"], { waitUntilFirstUpdate: !0 })
], y.prototype, "handleValueChange", 1);
u([
  ht("open", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleOpenChange", 1);
Ws("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
Ws("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
y.define("sl-select");
var ii = ct`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`, D = class extends K {
  constructor() {
    super(...arguments), this.localize = new le(this), this.isInitialized = !1, this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    this.isInitialized ? customElements.whenDefined("sl-select").then(() => {
      const e = this.closest("sl-select");
      e && e.handleDefaultSlotChange();
    }) : this.isInitialized = !0;
  }
  handleMouseEnter() {
    this.hasHover = !0;
  }
  handleMouseLeave() {
    this.hasHover = !1;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    typeof this.value != "string" && (this.value = String(this.value)), this.value.includes(" ") && (console.error("Option values cannot include a space. All spaces have been replaced with underscores.", this), this.value = this.value.replace(/ /g, "_"));
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const e = this.childNodes;
    let t = "";
    return [...e].forEach((s) => {
      s.nodeType === Node.ELEMENT_NODE && (s.hasAttribute("slot") || (t += s.textContent)), s.nodeType === Node.TEXT_NODE && (t += s.textContent);
    }), t.trim();
  }
  render() {
    return O`
      <div
        part="base"
        class=${bt({
      option: !0,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
D.styles = [Et, ii];
D.dependencies = { "sl-icon": F };
u([
  Q(".option__label")
], D.prototype, "defaultSlot", 2);
u([
  N()
], D.prototype, "current", 2);
u([
  N()
], D.prototype, "selected", 2);
u([
  N()
], D.prototype, "hasHover", 2);
u([
  f({ reflect: !0 })
], D.prototype, "value", 2);
u([
  f({ type: Boolean, reflect: !0 })
], D.prototype, "disabled", 2);
u([
  ht("disabled")
], D.prototype, "handleDisabledChange", 1);
u([
  ht("selected")
], D.prototype, "handleSelectedChange", 1);
u([
  ht("value")
], D.prototype, "handleValueChange", 1);
D.define("sl-option");
var ri = Object.defineProperty, ni = Object.getOwnPropertyDescriptor, qs = (e) => {
  throw TypeError(e);
}, dt = (e, t, s, o) => {
  for (var l = o > 1 ? void 0 : o ? ni(t, s) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (l = (o ? r(t, s, l) : r(l)) || l);
  return o && l && ri(t, s, l), l;
}, ai = (e, t, s) => t.has(e) || qs("Cannot " + s), ci = (e, t, s) => t.has(e) ? qs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), hi = (e, t, s) => (ai(e, t, "access private method"), s), Ce, Ys;
let R = class extends Qs(to, void 0) {
  constructor() {
    super(), ci(this, Ce), this._multiple = !1, this._options = [], this._value = void 0, this.readonly = !1, this.mandatory = !1, this.getFormElement = () => this._input, this.addValidator(
      "valueMissing",
      () => "Value is required",
      () => {
        var e;
        return !this.readonly && this.mandatory && !((e = this.value) != null && e.length);
      }
    );
  }
  set value(e) {
    if (JSON.stringify(this._value) !== JSON.stringify(e)) {
      if (Array.isArray(e))
        this._value = e.filter((t) => !!t && typeof t == "string");
      else if (e && typeof e == "string")
        this._value = [e];
      else
        return;
      this.dispatchEvent(new eo());
    }
  }
  get value() {
    return this._value || [];
  }
  set config(e) {
    var o;
    if (!e) return;
    this._multiple = !!e.getValueByAlias("multiple");
    const t = e.getValueByAlias("items"), s = e.getValueByAlias("default");
    this._multiple ? this._defaultValues = s == null ? void 0 : s.split(",").map((l) => l.trim()).filter(Boolean) : s && (this._defaultValues = [s]), Array.isArray(t) && t.length > 0 && (this._options = t.filter((l) => !!(l != null && l.key)).map((l) => {
      var i;
      return {
        name: this.localize.string(l.value) || l.key,
        value: l.key,
        alias: this.toSlSelectAlias(l.key),
        selected: !!((i = this._value) != null && i.includes(l.key))
      };
    }), (o = this._value) == null || o.forEach((l) => {
      this._options.find((i) => i.value === l) || this._options.push({
        name: `${l} (${this.localize.term("validation_legacyOption")})`,
        value: l,
        alias: this.toSlSelectAlias(l),
        selected: !0,
        invalid: !0
      });
    }));
  }
  render() {
    return He`
          <sl-select
            value="${this.value.join(" ")}"
            @sl-change=${hi(this, Ce, Ys)}
            placeholder="${this._multiple ? "Select multiple" : "Select one"}"
            size="small"
            clearable
            ?disabled=${this.readonly}
            ?multiple=${this._multiple}
          >
            ${Xs(
      this._options,
      (e) => He`
                <sl-option value="${e.alias}" ?disabled="${e.invalid}">${e.name}</sl-option>
              `
    )}
            <span slot="help-text" class="error">
              ${this._legacyOptionMessage}
            </span>
          </sl-select>
        `;
  }
  firstUpdated() {
    var e;
    (e = this._defaultValues) != null && e.length && !this._value && (this.value = this._defaultValues);
  }
  get _legacyOptionMessage() {
    var t;
    return !!((t = this._value) != null && t.some((s) => {
      const o = this._options.find((l) => l.value === s);
      return o ? o.invalid : !1;
    })) ? this.localize.term("validation_legacyOptionDescription") : "";
  }
  /**
   * <sl-select> doesn't allow spaces for values, so need to format it
   * @param value - available option value
   * @return string where all the whitespaces replaced with underscores
   */
  toSlSelectAlias(e) {
    return e.trim().replace(/\s+/g, "_");
  }
  static get _slSelectStyles() {
    const e = new CSSStyleSheet();
    return e.replaceSync(so), e;
  }
};
Ce = /* @__PURE__ */ new WeakSet();
Ys = function(e) {
  var s;
  const t = Array.isArray((s = e == null ? void 0 : e.target) == null ? void 0 : s.value) ? e.target.value : [e.target.value];
  this.value = this._options.filter((o) => t.includes(o.alias)).map((o) => o.value);
};
R.styles = [
  R._slSelectStyles,
  Zs`
            .error {
                color: var(--uui-color-danger);
                font-size: var(--uui-font-size-small);
            }
        `
];
dt([
  Se()
], R.prototype, "_multiple", 2);
dt([
  Se()
], R.prototype, "_options", 2);
dt([
  Se()
], R.prototype, "_value", 2);
dt([
  Ee({ type: Array })
], R.prototype, "value", 1);
dt([
  Ee({ type: Boolean, reflect: !0 })
], R.prototype, "readonly", 2);
dt([
  Ee({ type: Boolean, reflect: !0 })
], R.prototype, "mandatory", 2);
dt([
  Gs("sl-select")
], R.prototype, "_input", 2);
R = dt([
  Js("ak-property-editor-ui-dropdown")
], R);
const wi = R;
export {
  R as AkPropertyEditorUIDropdownElement,
  wi as default
};
//# sourceMappingURL=client.js.map
