---
layout: homepage
title: Knowledge
permalink: /knowledge.html
body_class: knowledge-page
---

# Knowledge Notes

<div class="page-lead">
<p>Research notes on electrical transport, defect chemistry, radiation response, and structural transitions in functional ceramics. General derivations are linked to literature examples, with particular attention to alkali niobates and ferroelectrics.</p>
<p class="knowledge-meta">Updated 22 October 2026 · Literature readings consolidated by topic</p>
</div>

<nav class="note-index" id="contents" aria-label="Knowledge topics">
<strong>Topics</strong>
<ul>
  <li><a href="#fundamentals-of-impedance-spectroscopy">Impedance fundamentals</a></li>
  <li><a href="#analytical-strategies-for-electroceramics">Assigning electrical responses</a></li>
  <li><a href="#defect-chemistry-of-electroceramics">Defect equilibria</a></li>
  <li><a href="#fermi-level-defect-ionization-and-electronic-carriers">Fermi level and charge states</a></li>
  <li><a href="#direct-bridge-between-defects-and-impedance-spectroscopy">From defects to impedance</a></li>
  <li><a href="#conduction-mechanisms-and-application-to-knn">Transport in KNN</a></li>
  <li><a href="#hopping-rates-and-mobile-ion-concentrations">Hopping and carrier concentration</a></li>
  <li><a href="#mixed-conduction-and-selective-contacts">Mixed conduction and contacts</a></li>
  <li><a href="#defect-redistribution-grain-boundaries-and-fatigue">Interfaces, ageing, and fatigue</a></li>
  <li><a href="#radiation-defects-and-functional-stability">Radiation defects</a></li>
  <li><a href="#octahedral-tilts-and-ferroelectric-phase-selection">Tilts and phase selection</a></li>
  <li><a href="#measurement-and-interpretation-checklist">Experimental interpretation</a></li>
  <li><a href="#references">Literature and references</a></li>
</ul>
</nav>

## Fundamentals of Impedance Spectroscopy
### Introduction to Impedance

Impedance spectroscopy measures a system's linear electrical response as a function of frequency. Polarization, charge transport, diffusion, and electrode reactions can all contribute. The measured spectrum therefore depends on both the material and the contacts.

When an alternating voltage $$V(t)$$ is applied to a system, the resulting current $$I(t)$$ responds with a phase shift. Using complex exponential notation, we define the voltage and current as:

$$
V(t) = V_0 e^{j\omega t}
$$

$$
I(t) = I_0 e^{j(\omega t + \theta)}
$$

 where $$\omega = 2\pi f$$ is the angular frequency, $$\theta$$ is the phase shift, and $$j = \sqrt{-1}$$.

The complex impedance $$Z^*$$ is defined by Ohm's law generalized for AC circuits:

$$
Z^* = \frac{V(t)}{I(t)} = \frac{V_0 e^{j\omega t}}{I_0 e^{j(\omega t + \theta)}} = \frac{V_0}{I_0} e^{-j\theta}
$$

 Using Euler's formula ($$e^{-j\theta} = \cos\theta - j\sin\theta$$), we can separate impedance into its real part ($$Z'$$, resistance) and imaginary part ($$Z''$$, reactance):

$$
Z^* = |Z|(\cos\theta - j\sin\theta) = Z' + jZ''
$$

Here $$Z''=\operatorname{Im}Z^*$$ is signed and is negative for a capacitor. The positive impedance-loss ordinate is $$Z''_{\mathrm{loss}}=-Z''$$. Nyquist plots below use $$-Z''$$ versus $$Z'$$, while the current phase lead $$\theta$$ gives an impedance phase $$\phi_Z=-\theta$$.

### Data Representation and Formalisms

Impedance data is typically visualized using Nyquist and Bode plots, which allow for the identification of different physical processes based on the shape and position of semicircles and linear segments. Furthermore, the data can be mathematically transformed into different complex formalisms depending on the physical property of interest.

#### Bode Plots and Axes Definitions

The Bode plot separates the single complex impedance equation into two frequency-dependent plots (Magnitude and Phase). The X-axis is plotted logarithmically to show a massive range of frequencies: $$x = \log_{10}(f)$$ or $$x = \log_{10}(\omega)$$.

- **Magnitude (Left Y-Axis):** This is the physical length of the complex vector. It is often plotted in decibels (dB) or as a standard $$\log_{10}$$ value.

$$
|Z| = \sqrt{(Z')^2 + (Z'')^2}
$$

$$
|Z|_{\text{dB}} = 20 \log_{10}\left(\frac{|Z|}{Z_{\mathrm{ref}}}\right)
$$

- **Phase Angle (Right Y-Axis):** This is the angle of the complex vector, representing the time delay between voltage and current.

$$
\phi_Z = \operatorname{atan2}(Z'',Z')
$$

Use a stated reference impedance $$Z_{\mathrm{ref}}$$ when reporting dB. The two-argument phase function preserves the correct quadrant.

The reason Bode plots use logarithms is that multiplying and dividing complex numbers becomes simple addition and subtraction. For an impedance equation like $$Z = \frac{Z_1 \cdot Z_2}{Z_3}$$:

- **Magnitude:**

$$
\begin{aligned}
\log_{10}|Z|={}&\log_{10}|Z_1|+\log_{10}|Z_2|\\
&-\log_{10}|Z_3|.
\end{aligned}
$$

- **Phase:** $$\phi_{\text{Total}} = \phi_1 + \phi_2 - \phi_3$$

#### The Four Complex Formalisms

Impedance data can be represented in four interrelated complex formalisms. By rationalizing the denominators, we can explicitly derive the real and imaginary parts of each:

**1. Impedance:**

$$
Z^* = Z' + jZ''
$$

**2. Admittance:**

$$
Y^* = \frac{1}{Z^*} = \frac{Z' - jZ''}{(Z')^2 + (Z'')^2}
$$

$$
Y' = \frac{Z'}{|Z|^2}, \quad Y'' = -\frac{Z''}{|Z|^2}
$$

**3. Permittivity:**

$$
\epsilon^* = \frac{Y^*}{j\omega C_0} = \frac{Y' + jY''}{j\omega C_0} = \frac{Y''}{\omega C_0} - j\frac{Y'}{\omega C_0}
$$

$$
\epsilon' = \frac{Y''}{\omega C_0}, \quad \epsilon'' = \frac{Y'}{\omega C_0}
$$

**4. Electric Modulus:**

$$
M^* = \frac{1}{\epsilon^*} = j\omega C_0 Z^* = -\omega C_0 Z'' + j\omega C_0 Z'
$$

$$
M' = -\omega C_0 Z'', \quad M'' = \omega C_0 Z'
$$

Here $$C_0=\epsilon_0 A/L$$ is the empty-cell capacitance and $$\epsilon^*=\epsilon'-j\epsilon''$$ denotes relative complex permittivity. Modulus emphasizes small-capacitance responses, whereas impedance emphasizes high-resistance responses. These are transformations of the same measurements, not independent experiments.

### Fundamental Circuit Components

To understand complex impedance spectra, we must first look at the baseline formulas for the three fundamental electrical components.

#### Ideal Components: R, L, and C

##### Resistor ($$R$$)

A resistor does not change with frequency and has no imaginary part.

- **Impedance:** $$Z_R = R$$

- **Log Magnitude:** $$\log_{10}\vert Z_R\vert  = \log_{10}(R)$$ (A flat, horizontal line)

- **Phase:** $$\phi_R = 0^\circ$$

##### Capacitor ($$C$$)

A capacitor's impedance drops as frequency increases.

- **Impedance:** $$Z_C = \frac{1}{j\omega C} = -j \left(\frac{1}{\omega C}\right)$$

- **Log Magnitude:** $$\log_{10}\vert Z_C\vert  = -\log_{10}(\omega) - \log_{10}(C)$$ (A straight line going downwards with a slope of -1).

- **Phase:** $$\phi_C = -90^\circ$$ or $$-\frac{\pi}{2}$$ rad

##### Inductor ($$L$$)

An inductor's impedance rises as frequency increases.

- **Impedance:** $$Z_L = j\omega L$$

- **Log Magnitude:** $$\log_{10}\vert Z_L\vert  = \log_{10}(\omega) + \log_{10}(L)$$ (A straight line going upwards with a slope of +1).

- **Phase:** $$\phi_L = +90^\circ$$ or $$+\frac{\pi}{2}$$ rad

#### The RC Parallel Element and Relaxation

An ideal parallel RC element represents one electrical relaxation time and is often used to approximate a grain or grain-boundary response. Its use does not by itself establish the microscopic process.

The total complex impedance is:

$$
Z = \left( \frac{1}{R} + j\omega C \right)^{-1} = \frac{R}{1 + j\omega RC}
$$

The characteristic relaxation time, $$\tau$$, is given by:

$$
\tau = RC
$$

The **Corner Frequency (Cutoff)** is the exact frequency where the Bode plot transitions from flat to a downward slope ($$\omega RC = 1$$):

$$
f_c = \frac{1}{2\pi RC}
$$

**Bode Plot Asymptotes for an RC Circuit:**

- **Low Frequencies ($$f \ll f_c$$):** $$\vert Z\vert  \approx R$$ (Flat line), Phase $$\approx 0^\circ$$.

- **High Frequencies ($$f \gg f_c$$):** $$\vert Z\vert  \approx \frac{1}{\omega C}$$ (Downward slope), Phase $$\to -90^\circ$$.

- **At $$f = f_c$$:** Phase $$= -45^\circ$$.

#### Mathematical Proof: The Nyquist Semicircle

In the complex impedance plane, an ideal RC element traces a semicircle. Using signed $$Z''$$, the semicircle lies below the real axis; plotting the conventional positive loss $$-Z''$$ places it above. Multiplying by the complex conjugate gives:

$$
Z=\frac{R(1-j\omega RC)}{1+(\omega RC)^2}.
$$

This defines our complex coordinates:

$$
\begin{aligned}
    Z' &= \frac{R}{1 + (\omega RC)^2} \\
    Z'' &= \frac{-\omega R^2 C}{1 + (\omega RC)^2}
\end{aligned}
$$

We want to prove these coordinates form a circle centered at $$(R/2, 0)$$ with a radius of $$R/2$$. We evaluate $$(Z' - R/2)^2 + (Z'')^2$$.

Writing $$x=\omega RC$$, first shift the real part:

$$
Z'-\frac R2=\frac{R(1-x^2)}{2(1+x^2)},
\qquad Z''=-\frac{Rx}{1+x^2}.
$$

Square both terms and sum them:

$$
\begin{aligned}
    \left(Z'-\frac R2\right)^2+(Z'')^2
    &=\frac{R^2[(1-x^2)^2+4x^2]}{4(1+x^2)^2}\\
    &=\frac{R^2(1+x^2)^2}{4(1+x^2)^2}=\frac{R^2}{4}.
\end{aligned}
$$

Because the equation simplifies to a constant, the locus of impedance points $$(Z', Z'')$$ satisfies the geometric equation of a circle: $$(x - h)^2 + (y - k)^2 = r^2$$. For $$\omega > 0$$, $$Z''$$ is strictly negative, tracing the lower semicircle. The maximum loss (the peak of the semicircle) occurs at $$\omega_{max} RC = 1$$.

### Advanced Equivalent Circuit Elements

Ideal resistors and capacitors are often insufficient for real solid-state materials. The following distributed elements are frequently used to map physical realities:

#### Constant Phase Element (CPE)

To account for depressed semicircles in the Nyquist plot (caused by surface roughness, defect distribution, or non-ideal behavior), the CPE replaces the ideal capacitor:

$$
Z_{CPE} = \frac{1}{Q(j\omega)^n}
$$

Here $$Q$$ has units S s$$^n$$ and is a capacitance only when $$n=1$$; $$n$$ is an empirical exponent ($$0\le n\le1$$).

Euler's formula gives

$$
\begin{aligned}
j^n&=\exp(jn\pi/2)\\
&=\cos(n\pi/2)+j\sin(n\pi/2).
\end{aligned}
$$

The CPE impedance is therefore

$$
Z_{CPE} = \frac{1}{Q\omega^n} \left[ \cos\left(\frac{n\pi}{2}\right) - j\sin\left(\frac{n\pi}{2}\right) \right]
$$

 This clearly shows that the CPE phase angle is purely determined by $$n$$ (Phase $$= -n\pi/2$$). When $$n=1$$, it acts as an ideal capacitor; when $$n=0$$, it acts as a resistor.

#### Warburg Impedance (Diffusion)

When semi-infinite diffusion controls the response over a suitable frequency range, the Warburg impedance has the same frequency dependence as a CPE with $$n=0.5$$:

$$
Z_W = \frac{A_W}{\sqrt{\omega}} (1 - j)
$$

 where $$A_W$$ is the Warburg coefficient. In a Nyquist plot, this appears as a straight line with a $$45^\circ$$ slope because the real and imaginary parts are identical in magnitude.

#### Debye Relaxation Model

For ideal dielectric relaxation, the frequency-dependent complex permittivity is described by the Debye equation:

$$
\epsilon^*(\omega) = \epsilon_\infty + \frac{\epsilon_s - \epsilon_\infty}{1 + j\omega \tau}
$$

 where $$\epsilon_s$$ is the static (low-frequency) permittivity, and $$\epsilon_\infty$$ is the high-frequency permittivity.

By multiplying the numerator and denominator by the complex conjugate $$(1 - j\omega\tau)$$, we can separate this into its real dielectric constant ($$\epsilon'$$) and imaginary dielectric loss ($$\epsilon''$$):

$$
\epsilon^*(\omega) = \epsilon_\infty + \frac{(\epsilon_s - \epsilon_\infty)(1 - j\omega\tau)}{1 + (\omega\tau)^2}
$$

$$
\epsilon'(\omega) = \epsilon_\infty + \frac{\epsilon_s - \epsilon_\infty}{1 + (\omega\tau)^2}
$$

$$
\epsilon''(\omega) = \frac{(\epsilon_s - \epsilon_\infty)\omega\tau}{1 + (\omega\tau)^2}
$$

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Analytical Strategies for Electroceramics

By fitting experimental impedance data to equivalent circuits built from these equations, researchers can extract resistance and capacitance parameters specific to different microstructural regions.

### Microstructural Dimensions and The Brickwork Model

For a parallel plate capacitor, the geometric capacitance $$C$$ is defined as $$C = \epsilon' \epsilon_0 \frac{A}{l}$$, where $$l$$ is the thickness.

In a uniform **brick-layer model**, let $$l_1$$ be the grain dimension and $$l_2$$ the boundary thickness. With corresponding relative permittivities $$\epsilon_b$$ and $$\epsilon_{gb}$$, the capacitance ratio is:

$$
\frac{C_b}{C_{gb}} \simeq \frac{\epsilon_b}{\epsilon_{gb}}\frac{l_2}{l_1}.
$$

The thickness ratio follows directly only if the two permittivities are approximately equal and the uniform-network approximation is appropriate.

### Frequency Region Correlations

Frequency ordering is a starting point for assignment. The position of each response is set by its own $$RC$$ time scale, and it can move or overlap with other responses as temperature changes.

- **Bulk:** often the highest-frequency ceramic relaxation because its capacitance is small; the frequency window must actually capture it.

- **Grain boundaries:** often slower and more capacitive, but can overlap with bulk, surface layers, or ferroelectric relaxation.

- **Contacts and diffusion:** commonly important at low frequency. A $$45^\circ$$ segment alone does not identify the species or prove a unique diffusion mechanism.

In a Bode magnitude plot, slopes of 0, $$-1$$, and $$-1/2$$ describe ideal resistive, capacitive, and Warburg limits, respectively. They are not universal labels for bulk, grain boundary, and electrode regions.

### Distribution of Relaxation Times (DRT)

DRT represents a spectrum as a distribution of electrical relaxation times. For a compatible RC-type response, the integral relationship is:

$$
Z(\omega) = R_0 + \int_{-\infty}^{\infty} \frac{\gamma(\tau)}{1 + j\omega\tau} d\ln\tau
$$

By separating the real and imaginary parts using the conjugate $$1 - j\omega\tau$$, the equations governing DRT evaluation become:

$$
Z'(\omega) = R_0 + \int_{-\infty}^{\infty} \frac{\gamma(\tau)}{1 + (\omega\tau)^2} d\ln\tau
$$

$$
Z''(\omega) = -\int_{-\infty}^{\infty} \frac{\omega\tau \cdot \gamma(\tau)}{1 + (\omega\tau)^2} d\ln\tau
$$

**Core characteristics of DRT:**

1. **Peak count:** depends on frequency coverage, noise, regularization, and the chosen kernel. A peak is not automatically a distinct carrier or spatial region.

2. **Peak position ($$\log\tau$$):** gives an electrical time scale. A shift to smaller $$\tau$$ does not alone separate changes in resistance, capacitance, diffusion, or surface exchange.

3.  **Peak area:** Represents the polarization resistance $$R_p$$ of that process:

$$
R_{p,i} = \int_{\text{Peak } i} \gamma(\tau) d\ln\tau \approx 2.303 \int_{\text{Peak } i} \gamma(\tau) d\log_{10}\tau
$$

Temperature-dependent peak shifts can be tested against an Arrhenius relation. The fit, physical assignment, and stability against regularization should each be checked.

### Comparing Impedance, Modulus, and Capacitance

For one isolated ideal parallel RC element, [West, Sinclair and Hirose (1997)](#ref-west1997) give complementary peak weights:

$$
Z''_{\mathrm{loss,max}}=\frac R2,
\qquad M''_{\max}=\frac{C_0}{2C},
\qquad \omega_{\max}=\frac1{RC}.
$$

A resistive grain boundary can dominate $$Z''_{\mathrm{loss}}$$ while a small-capacitance bulk response dominates $$M''$$. Coincident peaks for a single ideal element do not make either peak frequency a microscopic ion jump rate. Overlap and non-Debye behavior can separate their maxima.

For a bulk capacitance $$C_b$$ in series with a boundary capacitance $$C_{gb}$$, the high-frequency series limit is

$$
C_\infty=\frac{C_bC_{gb}}{C_b+C_{gb}}.
$$

Even this limit need not equal $$C_b$$. If $$C_b=K_C/(T-T_0)$$ and $$C_{gb}$$ is constant, then $$1/C_\infty=(T-T_0)/K_C+1/C_{gb}$$, shifting an apparent Curie-Weiss intercept to $$T_0-K_C/C_{gb}$$. Separate the bulk response before interpreting an apparent transition temperature.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Defect Chemistry of Electroceramics

Defect chemistry describes how vacancies, interstitials, substituted dopants, electrons, and holes are created and annihilated in a crystal. In electroceramics, this is not a separate topic from impedance spectroscopy. The impedance spectrum measures the electrical response of charged species, and those charged species are exactly the defects described by defect chemistry. The logical chain is

$$
\begin{aligned}
    \boxed{\text{processing atmosphere/composition}}
    &\rightarrow \boxed{\text{defect populations}} \\
    &\rightarrow \boxed{\text{carrier concentration and mobility}} \\
    &\rightarrow \boxed{\sigma,\; R,\; \tau,\; Z^*(\omega)} .
\end{aligned}
$$

 The purpose of this section is to make every step in this chain explicit.

### Kröger--Vink Notation

A defect is written in the form

$$
X_{\mathrm{site}}^{q},
$$

 where $$X$$ is the species occupying a crystallographic site, "site" is the site being occupied, and $$q$$ is the *effective charge* relative to the perfect lattice. The symbols are

$$
\times = 0, \qquad \bullet = +1, \qquad \bullet\bullet = +2, \qquad \prime=-1, \qquad \prime\prime=-2.
$$

 The charge is not the absolute ionic charge. It is the difference between the charge of the defect and the charge expected for that lattice site in the ideal crystal (Kroger1974; Maier2004).

| Symbol | Meaning |
| --- | --- |
| $$\mathrm{O}_{\mathrm{O}}^{\times}$$ | An oxygen ion on an oxygen site, with zero effective charge. |
| $$V_{\mathrm{O}}^{\bullet\bullet}$$ | An oxygen vacancy. Removing $$\mathrm{O}^{2-}$$ leaves an effective charge of $$+2$$. |
| $$V_{\mathrm{A}}^{\prime}$$ | An A-site vacancy in an alkali perovskite such as KNN, where the missing A-site ion has nominal charge $$+1$$. |
| $$V_{\mathrm{Nb}}^{\prime\prime\prime\prime\prime}$$ | A niobium-site vacancy in KNN. Missing $$\mathrm{Nb}^{5+}$$ gives effective charge $$-5$$. |
| $$e^{\prime}$$ | A conduction electron or a localized electron polaron, with effective charge $$-1$$. |
| $$h^{\bullet}$$ | An electron hole or localized hole polaron, with effective charge $$+1$$. |
| $$\mathrm{Nb}_{\mathrm{Nb}}^{\prime}$$ | A reduced niobium center, commonly interpreted as $$\mathrm{Nb}^{4+}$$ on a $$\mathrm{Nb}^{5+}$$ site. |

### Mass Action Law for Defect Reactions

For a general defect reaction written as

$$
\sum_i \nu_i A_i = 0,
$$

 where $$\nu_i>0$$ for products and $$\nu_i<0$$ for reactants, the equilibrium constant is

$$
K = \prod_i a_i^{\nu_i}.
$$

 For dilute defects, the activity $$a_i$$ is usually approximated by a normalized concentration. Therefore, for many practical derivations,

$$
a_i \approx \frac{[A_i]}{N_i},
$$

 where $$[A_i]$$ is the concentration of species $$A_i$$ and $$N_i$$ is the number of available sites. If the number of regular lattice ions is much larger than the defect concentration, the activity of a normal lattice species such as $$\mathrm{O}_{\mathrm{O}}^{\times}$$ is approximately constant:

$$
a_{\mathrm{O}_{\mathrm{O}}^{\times}} \approx 1.
$$

 This approximation is the origin of many simple power laws such as $$\sigma \propto p_{\mathrm{O}_2}^{-1/6}$$ or $$\sigma \propto p_{\mathrm{O}_2}^{1/4}$$.

### Charge Neutrality and Site Conservation

Defect equilibria are not determined by mass action alone. Two additional constraints are required.

**1. Charge neutrality.** Bulk defect equilibria are usually treated as electrically neutral away from surfaces and space-charge layers. Therefore,

$$
\sum_i z_i c_i = 0,
$$

 where $$z_i$$ is the effective charge number and $$c_i$$ is the concentration of charged species $$i$$. For a reduced alkali niobate containing oxygen vacancies, A-site vacancies, electrons, and holes, a simplified electroneutrality relation is

$$
2[V_{\mathrm{O}}^{\bullet\bullet}] + [h^{\bullet}]
    = [e^{\prime}] + [V_{\mathrm{A}}^{\prime}] + 5[V_{\mathrm{Nb}}^{\prime\prime\prime\prime\prime}] + \cdots.
$$

 The dots denote additional acceptors, donors, or defect complexes. This equation is often the most important equation in defect chemistry because it tells which defects must appear together.

**2. Site conservation.** The number of crystallographic sites is fixed. For the oxygen sublattice,

$$
[\mathrm{O}_{\mathrm{O}}^{\times}] + [V_{\mathrm{O}}^{\bullet\bullet}] + \cdots = N_{\mathrm{O}},
$$

where the omitted terms represent other species on regular oxygen sites. Interstitial oxygen occupies a separate sublattice, with its own balance $$[\mathrm O_i^{\prime\prime}]+[V_i^{\times}]=N_i$$ in a one-species interstitial model. It must not be counted as occupying a regular oxygen site. In the dilute limit,

$$
[V_{\mathrm{O}}^{\bullet\bullet}] \ll N_{\mathrm{O}}, \qquad [\mathrm{O}_{\mathrm{O}}^{\times}] \approx N_{\mathrm{O}}.
$$

 For the A-site sublattice of KNN,

$$
[\mathrm{K}_{\mathrm{A}}^{\times}] + [\mathrm{Na}_{\mathrm{A}}^{\times}] + [V_{\mathrm{A}}^{\prime}] + \cdots = N_{\mathrm{A}}.
$$

### Oxygen Vacancy Formation Under Reducing Conditions

A standard oxygen-loss reaction in an oxide is

$$
\mathrm{O}_{\mathrm{O}}^{\times}\rightleftharpoons \frac{1}{2}\mathrm{O}_2(g) + V_{\mathrm{O}}^{\bullet\bullet}+ 2e^{\prime}.
$$

 The mass action expression is

$$
K_{\mathrm{red}}
    = \frac{a_{V_{\mathrm{O}}^{\bullet\bullet}}a_{e^{\prime}}^{2}p_{\mathrm{O}_2}^{1/2}}{a_{\mathrm{O}_{\mathrm{O}}^{\times}}}.
$$

 Using $$a_{\mathrm{O}_{\mathrm{O}}^{\times}}\approx 1$$ and writing the defect activities as proportional to concentrations gives

$$
K_{\mathrm{red}} \approx [V_{\mathrm{O}}^{\bullet\bullet}][e^{\prime}]^2p_{\mathrm{O}_2}^{1/2}.
$$

 Rearranging gives

$$
[V_{\mathrm{O}}^{\bullet\bullet}][e^{\prime}]^2 = K_{\mathrm{red}}p_{\mathrm{O}_2}^{-1/2}.
$$

 If the only important charged defects are $$V_{\mathrm{O}}^{\bullet\bullet}$$ and $$e^{\prime}$$, charge neutrality requires

$$
2[V_{\mathrm{O}}^{\bullet\bullet}] = [e^{\prime}].
$$

 Substitution gives

$$
\begin{aligned}
    [V_{\mathrm{O}}^{\bullet\bullet}][e^{\prime}]^2
    &= [V_{\mathrm{O}}^{\bullet\bullet}](2[V_{\mathrm{O}}^{\bullet\bullet}])^2 \\
    &= [V_{\mathrm{O}}^{\bullet\bullet}] \cdot 4[V_{\mathrm{O}}^{\bullet\bullet}]^2 \\
    &= 4[V_{\mathrm{O}}^{\bullet\bullet}]^3.
\end{aligned}
$$

 Therefore,

$$
4[V_{\mathrm{O}}^{\bullet\bullet}]^3 = K_{\mathrm{red}}p_{\mathrm{O}_2}^{-1/2},
$$

 so

$$
[V_{\mathrm{O}}^{\bullet\bullet}]^3 = \frac{K_{\mathrm{red}}}{4}p_{\mathrm{O}_2}^{-1/2},
$$

 which gives

$$
[V_{\mathrm{O}}^{\bullet\bullet}] = \left(\frac{K_{\mathrm{red}}}{4}\right)^{1/3}p_{\mathrm{O}_2}^{-1/6}.
$$

 Using $$[e^{\prime}]=2[V_{\mathrm{O}}^{\bullet\bullet}]$$,

$$
[e^{\prime}] = 2\left(\frac{K_{\mathrm{red}}}{4}\right)^{1/3}p_{\mathrm{O}_2}^{-1/6}.
$$

 If electron mobility is approximately independent of oxygen partial pressure,

$$
\sigma_n = e\mu_n[e^{\prime}] \propto p_{\mathrm{O}_2}^{-1/6}.
$$

 Thus, a measured slope of approximately $$-1/6$$ in a plot of $$\log\sigma$$ versus $$\log p_{\mathrm{O}_2}$$ is strong evidence for reduction-controlled n-type conductivity associated with oxygen vacancy formation. It is not proof by itself, but it is a powerful diagnostic when combined with activation energies and impedance separation of bulk and grain-boundary responses.

### Oxygen Incorporation and p-Type Conductivity Under Oxidizing Conditions

An oxygen-incorporation reaction written in hole notation is

$$
\frac{1}{2}\mathrm{O}_2(g) + V_{\mathrm{O}}^{\bullet\bullet}\rightleftharpoons \mathrm{O}_{\mathrm{O}}^{\times}+ 2h^{\bullet}.
$$

 The equilibrium constant is

$$
K_{\mathrm{ox}}
    = \frac{a_{\mathrm{O}_{\mathrm{O}}^{\times}}a_{h^{\bullet}}^{2}}{a_{V_{\mathrm{O}}^{\bullet\bullet}}p_{\mathrm{O}_2}^{1/2}}.
$$

 Using $$a_{\mathrm{O}_{\mathrm{O}}^{\times}}\approx 1$$,

$$
K_{\mathrm{ox}} \approx \frac{[h^{\bullet}]^2}{[V_{\mathrm{O}}^{\bullet\bullet}]p_{\mathrm{O}_2}^{1/2}}.
$$

 Rearranging,

$$
[h^{\bullet}]^2 = K_{\mathrm{ox}}[V_{\mathrm{O}}^{\bullet\bullet}]p_{\mathrm{O}_2}^{1/2}.
$$

 If the oxygen vacancy concentration is fixed by acceptor dopants, then $$[V_{\mathrm{O}}^{\bullet\bullet}]$$ is approximately constant. Therefore,

$$
[h^{\bullet}] = \left(K_{\mathrm{ox}}[V_{\mathrm{O}}^{\bullet\bullet}]\right)^{1/2}p_{\mathrm{O}_2}^{1/4}.
$$

 The p-type electronic conductivity becomes

$$
\sigma_p = e\mu_p[h^{\bullet}] \propto p_{\mathrm{O}_2}^{1/4}.
$$

 Therefore, a positive oxygen-pressure exponent near $$+1/4$$ often indicates hole conduction in an acceptor-controlled oxide.

### Extrinsic Acceptor Compensation

Consider an acceptor dopant $$\mathrm{M}$$ substituting on a B-site with one lower positive charge than the host B cation:

$$
\mathrm{M}_{\mathrm{B}}^{\prime}.
$$

 A common compensation mechanism is oxygen-vacancy formation:

$$
2\mathrm{M}_{\mathrm{B}}^{\prime} + V_{\mathrm{O}}^{\bullet\bullet}\quad \text{is charge neutral.}
$$

 The charge neutrality equation is

$$
2[V_{\mathrm{O}}^{\bullet\bullet}] + [h^{\bullet}] = [e^{\prime}] + [\mathrm{M}_{\mathrm{B}}^{\prime}].
$$

 In the extrinsic ionic regime, electronic carriers are small compared with the dopant concentration:

$$
[h^{\bullet}] \ll [\mathrm{M}_{\mathrm{B}}^{\prime}], \qquad [e^{\prime}] \ll [\mathrm{M}_{\mathrm{B}}^{\prime}].
$$

 Then

$$
2[V_{\mathrm{O}}^{\bullet\bullet}] \approx [\mathrm{M}_{\mathrm{B}}^{\prime}],
$$

 so

$$
[V_{\mathrm{O}}^{\bullet\bullet}] \approx \frac{[\mathrm{M}_{\mathrm{B}}^{\prime}]}{2}.
$$

This fixes the total compensating vacancy concentration in this simplified regime. The free, mobile fraction can still change through association or trapping. A migration-dominated activation energy follows only if those effects and other prefactors are approximately constant.

### Intrinsic Schottky and Frenkel Defects

For KNN-like alkali niobates, a full Schottky reaction can be written schematically as

$$
\varnothing \rightleftharpoons V_{\mathrm{A}}^{\prime}+ V_{\mathrm{Nb}}^{\prime\prime\prime\prime\prime}+ 3V_{\mathrm{O}}^{\bullet\bullet},
$$

where the removed formula unit is transferred to a surface or reservoir, suppressed in this schematic notation. The mass action expression is

$$
K_{\mathrm{S}} = [V_{\mathrm{A}}^{\prime}][V_{\mathrm{Nb}}^{\prime\prime\prime\prime\prime}][V_{\mathrm{O}}^{\bullet\bullet}]^3.
$$

 For an oxygen Frenkel pair,

$$
\mathrm{O}_{\mathrm{O}}^{\times}\rightleftharpoons V_{\mathrm{O}}^{\bullet\bullet}+ \mathrm{O}_{i}^{\prime\prime},
$$

 so

$$
K_{\mathrm{F}} = [V_{\mathrm{O}}^{\bullet\bullet}][\mathrm{O}_{i}^{\prime\prime}],
$$

 again assuming $$a_{\mathrm{O}_{\mathrm{O}}^{\times}}\approx 1$$. These intrinsic defects usually have a formation contribution to the measured activation energy, because their concentrations increase with temperature.

### Defect Association and Trapping

Mobile defects can be trapped by dopants, grain boundaries, charged domain walls, or other defects. For example,

$$
\mathrm{M}_{\mathrm{B}}^{\prime} + V_{\mathrm{O}}^{\bullet\bullet}\rightleftharpoons (\mathrm{M}_{\mathrm{B}}^{\prime}-V_{\mathrm{O}}^{\bullet\bullet})^{\bullet}.
$$

 The association constant is

$$
K_{\mathrm{assoc}}
    = \frac{[(\mathrm{M}_{\mathrm{B}}^{\prime}-V_{\mathrm{O}}^{\bullet\bullet})^{\bullet}]}{[\mathrm{M}_{\mathrm{B}}^{\prime}][V_{\mathrm{O}}^{\bullet\bullet}]}.
$$

 If only free oxygen vacancies contribute to long-range conduction, then the measured conductivity is controlled by

$$
\sigma_{\mathrm{ion}} \propto [V_{\mathrm{O}}^{\bullet\bullet}]_{\mathrm{free}}D_{\mathrm{V}}.
$$

 When the vacancy must first dissociate from a trap and then migrate, the apparent activation energy can become

$$
E_a^{\mathrm{app}} \approx \Delta H_{\mathrm{assoc}} + \Delta H_{m},
$$

 where $$\Delta H_{\mathrm{assoc}}$$ is the enthalpy required to release the mobile vacancy and $$\Delta H_m$$ is the migration enthalpy. This explains why grain boundaries or dopant-rich regions often show larger activation energies than grains.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Fermi Level, Defect Ionization, and Electronic Carriers

The Fermi level $$E_F$$ is the electron electrochemical potential expressed as an energy. In defect chemistry, $$E_F$$ determines the equilibrium concentrations of electrons, holes, and charged defect states. In impedance spectroscopy, $$E_F$$ matters because it controls electronic carrier concentration, defect charge state, and therefore the measured resistance.

### Electron and Hole Concentrations

For a non-degenerate semiconductor or insulator, the probability that an electronic state of energy $$E$$ is occupied is given by the Fermi--Dirac function

$$
f(E)=\frac{1}{1+\exp\left(\frac{E-E_F}{k_{\mathrm{B}}T}\right)}.
$$

 When $$E-E_F \gg k_{\mathrm{B}}T$$, the exponential term is much larger than 1, so

$$
1+\exp\left(\frac{E-E_F}{k_{\mathrm{B}}T}\right)
    \approx \exp\left(\frac{E-E_F}{k_{\mathrm{B}}T}\right).
$$

 Therefore,

$$
f(E) \approx \exp\left(-\frac{E-E_F}{k_{\mathrm{B}}T}\right).
$$

 Integrating over the conduction-band density of states gives

$$
n = N_C \exp\left(-\frac{E_C-E_F}{k_{\mathrm{B}}T}\right),
$$

 where $$N_C$$ is the effective density of states and $$E_C$$ is the conduction-band edge. Similarly, the hole concentration is

$$
p = N_V \exp\left(-\frac{E_F-E_V}{k_{\mathrm{B}}T}\right),
$$

 where $$N_V$$ is the valence-band effective density of states and $$E_V$$ is the valence-band edge. Multiplying $$n$$ and $$p$$ gives

$$
\begin{aligned}
    np
    &= N_CN_V
    \exp\left(-\frac{E_C-E_F}{k_{\mathrm{B}}T}\right)
    \exp\left(-\frac{E_F-E_V}{k_{\mathrm{B}}T}\right) \\
    &= N_CN_V
    \exp\left[-\frac{(E_C-E_F)+(E_F-E_V)}{k_{\mathrm{B}}T}\right] \\
    &= N_CN_V
    \exp\left(-\frac{E_C-E_V}{k_{\mathrm{B}}T}\right) \\
    &= N_CN_V
    \exp\left(-\frac{E_g}{k_{\mathrm{B}}T}\right),
\end{aligned}
$$

 where $$E_g=E_C-E_V$$ is the band gap.

### Fermi-Level Dependence of Defect Formation Energy

The formation free energy of a charged defect $$D^q$$ can be written schematically as (Tuller2011; Maier2004)

$$
\Delta G_f(D^q)
    = \Delta G_f^0(D^q;\{\mu_i\}) + q(E_F-E_V),
$$

 where $$q$$ is the effective charge number, $$\{\mu_i\}$$ are the chemical potentials of atoms exchanged with reservoirs, and the valence-band edge $$E_V$$ is used as the energy reference. A positive defect becomes less favorable when $$E_F$$ increases, while a negative defect becomes more favorable when $$E_F$$ increases.

The equilibrium concentration of that defect is

$$
[D^q] = N_D g_q \exp\left[-\frac{\Delta G_f(D^q)}{k_{\mathrm{B}}T}\right],
$$

 where $$N_D$$ is the number of available sites and $$g_q$$ is a degeneracy factor. Substituting the formation energy expression gives

$$
[D^q]
    = N_D g_q
    \exp\left[-\frac{\Delta G_f^0(D^q;\{\mu_i\})+q(E_F-E_V)}{k_{\mathrm{B}}T}\right].
$$

 This can be separated into two factors:

$$
[D^q]
    = N_D g_q
    \exp\left[-\frac{\Delta G_f^0(D^q;\{\mu_i\})}{k_{\mathrm{B}}T}\right]
    \exp\left[-\frac{q(E_F-E_V)}{k_{\mathrm{B}}T}\right].
$$

 Taking the logarithm gives

$$
\ln[D^q]
    = \ln(N_Dg_q)
    -\frac{\Delta G_f^0(D^q;\{\mu_i\})}{k_{\mathrm{B}}T}
    -\frac{q(E_F-E_V)}{k_{\mathrm{B}}T}.
$$

 Therefore,

$$
\frac{\partial\ln[D^q]}{\partial E_F} = -\frac{q}{k_{\mathrm{B}}T}.
$$

 For an oxygen vacancy $$V_{\mathrm{O}}^{\bullet\bullet}$$ with $$q=+2$$,

$$
\frac{\partial\ln[V_{\mathrm{O}}^{\bullet\bullet}]}{\partial E_F} = -\frac{2}{k_{\mathrm{B}}T}.
$$

 Thus, increasing the Fermi level suppresses the equilibrium concentration of positively charged oxygen vacancies, while decreasing the Fermi level favors them, all else being equal.

### Charge Neutrality Determines the Fermi Level

The Fermi level is not arbitrary. It is fixed by charge neutrality:

$$
p(E_F,T)-n(E_F,T)+\sum_j q_j[D_j^{q_j}](E_F,T)=0.
$$

 This equation contains the electronic carrier concentrations and all charged defects. Substituting the non-degenerate carrier formulas gives

$$
N_V\exp\left(-\frac{E_F-E_V}{k_{\mathrm{B}}T}\right)
    -N_C\exp\left(-\frac{E_C-E_F}{k_{\mathrm{B}}T}\right)
    +\sum_j q_j[D_j^{q_j}](E_F,T)=0.
$$

 Because each $$[D_j^{q_j}]$$ can also depend on $$E_F$$, this equation must usually be solved self-consistently. Conceptually, the solution proceeds as follows:

$$
\begin{aligned}
    &\text{choose } T,\;p_{\mathrm{O}_2},\;\text{composition}, \\
    &\text{write mass-action equations for all relevant defects}, \\
    &\text{write site-conservation equations}, \\
    &\text{solve charge neutrality for }E_F, \\
    &\text{use }E_F\text{ to calculate }n,\;p,\;[D^q], \\
    &\text{insert these concentrations into conductivity and impedance equations.}
\end{aligned}
$$

### Defect Charge-State Transitions

A defect may have more than one charge state. For electron capture,

$$
D^q + e^{\prime}\rightleftharpoons D^{q-1}.
$$

 The transition level $$E_t(q/q-1)$$ is the Fermi level at which the two charge states have equal formation free energy:

$$
\Delta G_f(D^q;E_F=E_t)=\Delta G_f(D^{q-1};E_F=E_t).
$$

 Ignoring degeneracy factors for clarity, the concentration ratio is

$$
\frac{[D^{q-1}]}{[D^q]}
    = \exp\left(\frac{E_F-E_t(q/q-1)}{k_{\mathrm{B}}T}\right).
$$

 Therefore,

- if $$E_F>E_t$$, the more reduced state $$D^{q-1}$$ is favored;

- if $$E_F<E_t$$, the more oxidized state $$D^q$$ is favored.

This is important for oxides such as niobates because electrons can localize on transition-metal cations:

$$
\mathrm{Nb}_{\mathrm{Nb}}^{\times}+e^{\prime}
    \rightleftharpoons
    \mathrm{Nb}_{\mathrm{Nb}}^{\prime}.
$$

 The species $$\mathrm{Nb}_{\mathrm{Nb}}^{\prime}$$ is a reduced niobium center, often described as a small electron polaron. Small-polaron hopping can then be represented as

$$
\mathrm{Nb}_{\mathrm{Nb}}^{\prime} + \mathrm{Nb}_{\mathrm{Nb}}^{\times}
    \rightleftharpoons
    \mathrm{Nb}_{\mathrm{Nb}}^{\times} + \mathrm{Nb}_{\mathrm{Nb}}^{\prime}.
$$

 Although the initial and final formulas look identical, the electron has moved from one niobium site to another.

### Fermi Level and Apparent Activation Energy

For electronic conduction,

$$
\sigma_e=e\mu_e n.
$$

If the population of transport-active electrons is described over a limited temperature range by

$$
n_{\mathrm{tr}}=N_{\mathrm{tr}}\exp\left(-\frac{\Delta E_c}{k_{\mathrm B}T}\right),
$$

then

$$
\sigma_e=e\mu_e N_{\mathrm{tr}}\exp\left(-\frac{\Delta E_c}{k_{\mathrm B}T}\right).
$$

For a compatible activated mobility model,

$$
\mu_e = \mu_0 T^{-s}\exp\left(-\frac{H_{\mathrm{hop}}}{k_{\mathrm{B}}T}\right),
$$

where $$s=1$$ is common for adiabatic small-polaron hopping. The transport-state population must be derived for that same model. A conduction-band expression for $$n$$ cannot automatically be combined with a localized-polaron mobility. Therefore,

$$
\begin{aligned}
    \sigma_e
    &= eN_{\mathrm{tr}}\mu_0T^{-s}
    \exp\left(-\frac{\Delta E_c}{k_{\mathrm{B}}T}\right)
    \exp\left(-\frac{H_{\mathrm{hop}}}{k_{\mathrm{B}}T}\right) \\
    &= eN_{\mathrm{tr}}\mu_0T^{-s}
    \exp\left[-\frac{\Delta E_c+H_{\mathrm{hop}}}{k_{\mathrm{B}}T}\right].
\end{aligned}
$$

 Multiplying by $$T^s$$ gives

$$
\sigma_eT^s=eN_{\mathrm{tr}}\mu_0
    \exp\left[-\frac{\Delta E_c+H_{\mathrm{hop}}}{k_{\mathrm{B}}T}\right].
$$

If the population activation term, hopping enthalpy, and prefactor are approximately constant, an Arrhenius plot of $$\ln(\sigma_eT^s)$$ versus $$1/T$$ gives

$$
E_a \approx \Delta E_c+H_{\mathrm{hop}}.
$$

More generally, use the slope definition

$$
E_a^{\mathrm{app}}
    = -k_{\mathrm{B}}\frac{d\ln(\sigma_eT^s)}{d(1/T)}.
$$

 Let

$$
A(T)=\Delta E_c(T)+H_{\mathrm{hop}}(T).
$$

 Then

$$
\ln(\sigma_eT^s)=\ln(eN_{\mathrm{tr}}\mu_0)-\frac{A(T)}{k_{\mathrm{B}}T}.
$$

 Set

$$
x=\frac{1}{T}.
$$

 Then

$$
\ln(\sigma_eT^s)=\ln(eN_{\mathrm{tr}}\mu_0)-\frac{A(x)x}{k_{\mathrm{B}}}.
$$

Holding the prefactor constant, differentiate with respect to $$x$$:

$$
\begin{aligned}
    \frac{d\ln(\sigma_eT^s)}{dx}
    &= -\frac{1}{k_{\mathrm{B}}}\frac{d[A(x)x]}{dx} \\
    &= -\frac{1}{k_{\mathrm{B}}}\left(A(x)+x\frac{dA}{dx}\right).
\end{aligned}
$$

 Therefore,

$$
E_a^{\mathrm{app}}
    = A(x)+x\frac{dA}{dx}.
$$

 Because $$x=1/T$$, one has $$x(dA/dx)=-T(dA/dT)$$. Thus,

$$
E_a^{\mathrm{app}}
    = A(T)-T\frac{dA}{dT}.
$$

If the prefactor $$P(T)=eN_{\mathrm{tr}}\mu_0$$ varies, the full expression is $$E_a^{\mathrm{app}}=A-T\,dA/dT+k_{\mathrm B}T^2\,d\ln P/dT$$. A fitted slope can therefore contain population, mobility, and prefactor contributions.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Direct Bridge Between Defects and Impedance Spectroscopy

This section gives the central mathematical bridge: point defects determine conductivity; conductivity determines resistance; resistance and capacitance determine the impedance spectrum.

### From Defect Concentration to Conductivity

For a charged carrier $$i$$ with charge number $$z_i$$, concentration $$c_i$$, diffusion coefficient $$D_i$$, and mobility $$\mu_i$$, the drift current density is

$$
J_i = q_i c_i v_i,
$$

 where

$$
q_i=z_ie
$$

 and $$v_i$$ is the drift velocity. Under a small electric field $$E$$,

$$
|v_i|=\mu_i |E|.
$$

 The magnitude of the current density is therefore

$$
|J_i|=|q_i|c_i|v_i|=|z_i|e c_i\mu_i |E|.
$$

 Since $$\vert J_i\vert =\sigma_i\vert E\vert $$,

$$
\sigma_i=|z_i|e c_i\mu_i.
$$

 The Nernst--Einstein relation connects mobility and diffusion:

$$
\mu_i=\frac{|z_i|eD_i}{k_{\mathrm{B}}T}.
$$

 Therefore, the partial conductivity is

$$
\begin{aligned}
    \sigma_i
    &= |z_i|e c_i \mu_i \\
    &= |z_i|e c_i\left(\frac{|z_i|eD_i}{k_{\mathrm{B}}T}\right) \\
    &= \frac{z_i^2e^2c_iD_i}{k_{\mathrm{B}}T}.
\end{aligned}
$$

 For multiple carriers,

$$
\sigma = \sum_i \sigma_i
    = \sum_i \frac{z_i^2e^2c_iD_i}{k_{\mathrm{B}}T}.
$$

 This equation is the first bridge. Defect chemistry supplies $$c_i$$; migration physics supplies $$D_i$$; impedance spectroscopy measures $$\sigma$$ through resistance.

### From Conductivity to Measured Resistance

For a homogeneous slab of thickness $$L$$ and electrode area $$A$$, Ohm's law gives

$$
R=\rho\frac{L}{A},
$$

 where $$\rho$$ is resistivity. Since

$$
\rho=\frac{1}{\sigma},
$$

 we obtain

$$
R=\frac{L}{A\sigma}.
$$

 Substituting the Nernst--Einstein expression for $$\sigma$$ gives

$$
R=\frac{L}{A\displaystyle\sum_i \frac{z_i^2e^2c_iD_i}{k_{\mathrm{B}}T}}.
$$

At fixed geometry and diffusivity, increasing the concentration of mobile carriers lowers resistance. Increasing the total defect concentration need not do so if trapping, association, or barriers also change.

### From Resistance and Permittivity to Relaxation Time

The capacitance of the same slab is

$$
C=\epsilon_0\epsilon_r\frac{A}{L}.
$$

 The RC time constant is

$$
\begin{aligned}
    \tau
    &=RC \\
    &=\left(\frac{L}{A\sigma}\right)\left(\epsilon_0\epsilon_r\frac{A}{L}\right) \\
    &=\frac{\epsilon_0\epsilon_r}{\sigma}.
\end{aligned}
$$

 This is the Maxwell relaxation time:

$$
\boxed{\tau_M=\frac{\epsilon_0\epsilon_r}{\sigma}}.
$$

 The peak frequency for an ideal parallel RC element is

$$
\omega_{\mathrm{max}}=\frac{1}{RC}=\frac{1}{\tau_M}.
$$

 Therefore,

$$
f_{\mathrm{max}}=\frac{1}{2\pi\tau_M}=\frac{\sigma}{2\pi\epsilon_0\epsilon_r}.
$$

 Substituting the defect-controlled conductivity gives

$$
f_{\mathrm{max}}
    =\frac{1}{2\pi\epsilon_0\epsilon_r}
    \sum_i \frac{z_i^2e^2c_iD_i}{k_{\mathrm{B}}T}.
$$

 This is the most compact mathematical bridge between defect chemistry and impedance spectroscopy:

$$
\boxed{c_i,D_i \longrightarrow \sigma \longrightarrow R,\tau,f_{\mathrm{max}} \longrightarrow Z^*(\omega).}
$$

### Full Impedance of Multiple Defect-Controlled Regions

A polycrystalline electroceramic usually contains grains, grain boundaries, and electrode interfaces. A common series representation is

$$
Z^*(\omega)=R_s+\sum_{r}\frac{R_r}{1+j\omega R_rC_r}+Z_{\mathrm{electrode}}(\omega),
$$

 where $$r$$ can represent bulk, grain boundary, or a surface layer. For each region,

$$
R_r=\frac{L_r}{A_r\sigma_r}
$$

 and

$$
C_r=\epsilon_0\epsilon_{r}\frac{A_r}{L_r}.
$$

 Thus,

$$
\tau_r=R_rC_r=\frac{\epsilon_0\epsilon_r}{\sigma_r}.
$$

 If a grain boundary has a lower mobile-defect concentration or a higher migration barrier than the grain interior, then

$$
\sigma_{gb}<\sigma_b,
$$

 so

$$
\rho_{gb}>\rho_b.
$$

The resistance of an actual region additionally depends on its thickness and current-carrying area. For a sufficiently resistive, thin boundary layer,

$$
\tau_{gb}=R_{gb}C_{gb}
$$

 usually appears at lower frequency than the bulk relaxation.

### Capacitance as a Microstructural Fingerprint

For a grain of characteristic thickness $$d_g$$ and a grain-boundary layer of thickness $$\delta_{gb}$$,

$$
C_b=\epsilon_0\epsilon_b\frac{A}{d_g}
$$

 whereas

$$
C_{gb}=\epsilon_0\epsilon_{gb}\frac{A}{\delta_{gb}}.
$$

 Taking the ratio,

$$
\begin{aligned}
    \frac{C_b}{C_{gb}}
    &=\frac{\epsilon_0\epsilon_bA/d_g}{\epsilon_0\epsilon_{gb}A/\delta_{gb}} \\
    &=\frac{\epsilon_b}{\epsilon_{gb}}\frac{\delta_{gb}}{d_g}.
\end{aligned}
$$

 Therefore,

$$
\frac{\delta_{gb}}{d_g}=\frac{\epsilon_{gb}}{\epsilon_b}\frac{C_b}{C_{gb}}.
$$

 If $$\epsilon_{gb}\approx\epsilon_b$$, then

$$
\frac{\delta_{gb}}{d_g}\approx\frac{C_b}{C_{gb}}.
$$

 Because grain boundaries are much thinner than grains, $$C_{gb}$$ is usually much larger than $$C_b$$. This is why capacitance helps assign arcs: the resistance gives the transport difficulty, while the capacitance gives the geometric or microstructural origin of the response.

Approximate capacitance ranges often used for ceramic assignment are

$$
C_b\sim 10^{-12}\text{--}10^{-11}\,\mathrm{F},
$$

$$
C_{gb}\sim 10^{-10}\text{--}10^{-8}\,\mathrm{F},
$$

$$
C_{el}\sim 10^{-7}\text{--}10^{-4}\,\mathrm{F}.
$$

 These values are geometry-dependent and should not be used alone. The best assignment uses capacitance, activation energy, atmosphere dependence, and microstructural evidence together (Irvine1990; Macdonald1987; Barsoukov2005).

### Worked Bridge Example: Oxygen Vacancy Formation to a Nyquist Arc

Start from the reducing reaction

$$
\mathrm{O}_{\mathrm{O}}^{\times}\rightleftharpoons \frac{1}{2}\mathrm{O}_2(g)+V_{\mathrm{O}}^{\bullet\bullet}+2e^{\prime}.
$$

 As shown earlier,

$$
[e^{\prime}] \propto p_{\mathrm{O}_2}^{-1/6}.
$$

 Assume the measured bulk conductivity is dominated by electron polarons with mobility

$$
\mu_e=\mu_0T^{-s}\exp\left(-\frac{H_{\mathrm{hop}}}{k_{\mathrm{B}}T}\right).
$$

 Then

$$
\begin{aligned}
    \sigma_b
    &=e\mu_e[e^{\prime}] \\
    &\propto e\mu_0T^{-s}\exp\left(-\frac{H_{\mathrm{hop}}}{k_{\mathrm{B}}T}\right)p_{\mathrm{O}_2}^{-1/6}.
\end{aligned}
$$

 The bulk resistance is

$$
R_b=\frac{L}{A\sigma_b}.
$$

 Therefore,

$$
R_b \propto T^{s}\exp\left(\frac{H_{\mathrm{hop}}}{k_{\mathrm{B}}T}\right)p_{\mathrm{O}_2}^{1/6}.
$$

 The ideal bulk impedance is

$$
Z_b^*(\omega)=\frac{R_b}{1+j\omega R_bC_b}.
$$

 Its peak frequency is

$$
f_{\mathrm{max},b}=\frac{1}{2\pi R_bC_b}.
$$

 Because $$R_b\propto p_{\mathrm{O}_2}^{1/6}$$,

$$
f_{\mathrm{max},b}\propto p_{\mathrm{O}_2}^{-1/6}
$$

 if $$C_b$$ is approximately constant. The physical interpretation is direct:

- reducing atmosphere lowers $$p_{\mathrm{O}_2}$$;

- lower $$p_{\mathrm{O}_2}$$ increases oxygen-vacancy and electron concentration;

- higher carrier concentration increases $$\sigma_b$$;

- higher $$\sigma_b$$ decreases the Nyquist arc diameter $$R_b$$;

- higher $$\sigma_b$$ also shifts the peak to higher frequency because $$f_{\mathrm{max}}=\sigma/(2\pi\epsilon_0\epsilon_r)$$.

The same defect equilibrium therefore constrains both arc diameter and peak position, provided that mobility and permittivity satisfy the stated assumptions.

### Worked Bridge Example: Extrinsic Oxygen-Ion Conduction

For acceptor-controlled oxygen-vacancy conduction,

$$
[V_{\mathrm{O}}^{\bullet\bullet}]\approx\frac{[\mathrm{M}_{\mathrm{B}}^{\prime}]}{2}.
$$

 The oxygen vacancy has charge number $$z=+2$$, so its partial ionic conductivity is

$$
\sigma_{V_O}=\frac{(2)^2e^2[V_{\mathrm{O}}^{\bullet\bullet}]D_V}{k_{\mathrm{B}}T}.
$$

 The vacancy diffusion coefficient is

$$
D_V=D_0\exp\left(-\frac{\Delta H_m}{k_{\mathrm{B}}T}\right).
$$

 Substituting gives

$$
\begin{aligned}
    \sigma_{V_O}
    &=\frac{4e^2[V_{\mathrm{O}}^{\bullet\bullet}]D_0}{k_{\mathrm{B}}T}
    \exp\left(-\frac{\Delta H_m}{k_{\mathrm{B}}T}\right) \\
    &=\frac{4e^2D_0}{k_{\mathrm{B}}T}\left(\frac{[\mathrm{M}_{\mathrm{B}}^{\prime}]}{2}\right)
    \exp\left(-\frac{\Delta H_m}{k_{\mathrm{B}}T}\right) \\
    &=\frac{2e^2D_0[\mathrm{M}_{\mathrm{B}}^{\prime}]}{k_{\mathrm{B}}T}
    \exp\left(-\frac{\Delta H_m}{k_{\mathrm{B}}T}\right).
\end{aligned}
$$

 Multiplying by $$T$$,

$$
\sigma_{V_O}T
    =\frac{2e^2D_0[\mathrm{M}_{\mathrm{B}}^{\prime}]}{k_{\mathrm{B}}}
    \exp\left(-\frac{\Delta H_m}{k_{\mathrm{B}}T}\right).
$$

 Taking the natural logarithm,

$$
\ln(\sigma_{V_O}T)
    =\ln\left(\frac{2e^2D_0[\mathrm{M}_{\mathrm{B}}^{\prime}]}{k_{\mathrm{B}}}\right)
    -\frac{\Delta H_m}{k_{\mathrm{B}}}\frac{1}{T}.
$$

 Therefore, the slope of $$\ln(\sigma T)$$ versus $$1/T$$ is

$$
m=-\frac{\Delta H_m}{k_{\mathrm{B}}}
$$

 and

$$
\Delta H_m=-mk_{\mathrm{B}}.
$$

 In this extrinsic case, the impedance-derived activation energy is the vacancy migration enthalpy, not the vacancy formation enthalpy.

### Space-Charge Layers and Grain-Boundary Impedance

Charged defects can segregate to grain boundaries and create a space-charge potential. This produces grain-boundary arcs in impedance spectra. The electrostatic potential $$\phi(x)$$ satisfies Poisson's equation:

$$
\frac{d^2\phi}{dx^2}=-\frac{\rho(x)}{\epsilon_0\epsilon_r},
$$

 where the local charge density is

$$
\rho(x)=e\sum_i z_i\left[c_i(x)-c_{i,\infty}\right].
$$

 For small potentials, the Boltzmann distribution gives

$$
c_i(x)=c_{i,\infty}\exp\left(-\frac{z_ie\phi(x)}{k_{\mathrm{B}}T}\right).
$$

 If $$\vert z_ie\phi\vert \ll k_{\mathrm{B}}T$$, then

$$
\exp\left(-\frac{z_ie\phi}{k_{\mathrm{B}}T}\right)
    \approx 1-\frac{z_ie\phi}{k_{\mathrm{B}}T}.
$$

 Therefore,

$$
c_i(x)-c_{i,\infty}
    \approx -c_{i,\infty}\frac{z_ie\phi}{k_{\mathrm{B}}T}.
$$

 Substituting into the charge density gives

$$
\begin{aligned}
    \rho(x)
    &=e\sum_i z_i\left[-c_{i,\infty}\frac{z_ie\phi}{k_{\mathrm{B}}T}\right] \\
    &=-\frac{e^2\phi}{k_{\mathrm{B}}T}\sum_i z_i^2c_{i,\infty}.
\end{aligned}
$$

 Poisson's equation becomes

$$
\begin{aligned}
    \frac{d^2\phi}{dx^2}
    &=-\frac{1}{\epsilon_0\epsilon_r}\left[-\frac{e^2\phi}{k_{\mathrm{B}}T}\sum_i z_i^2c_{i,\infty}\right] \\
    &=\frac{e^2}{\epsilon_0\epsilon_rk_{\mathrm{B}}T}\left(\sum_i z_i^2c_{i,\infty}\right)\phi.
\end{aligned}
$$

 Define the Debye length

$$
L_D=\left(\frac{\epsilon_0\epsilon_rk_{\mathrm{B}}T}{e^2\sum_i z_i^2c_{i,\infty}}\right)^{1/2}.
$$

 Then

$$
\frac{d^2\phi}{dx^2}=\frac{\phi}{L_D^2}.
$$

 A solution decaying away from the grain boundary is

$$
\phi(x)=\phi_0\exp\left(-\frac{x}{L_D}\right).
$$

 The corresponding space-charge capacitance per unit area is approximately

$$
\frac{C_{sc}}{A}\approx\frac{\epsilon_0\epsilon_r}{L_D}.
$$

 If the mobile carrier must cross a grain-boundary barrier of height $$\Delta\phi$$, its conductivity is approximately

$$
\sigma_{gb}\approx\sigma_b\exp\left(-\frac{|z_m|e\Delta\phi}{k_{\mathrm{B}}T}\right),
$$

 where $$z_m$$ is the charge number of the mobile carrier. Therefore,

$$
R_{gb}\propto\exp\left(\frac{|z_m|e\Delta\phi}{k_{\mathrm{B}}T}\right).
$$

 This explains why grain-boundary resistance can be much larger than bulk resistance even when the grain boundary is very thin. Defect segregation changes $$\Delta\phi$$ and $$L_D$$; impedance spectroscopy detects these changes as $$R_{gb}$$, $$C_{gb}$$, and $$\tau_{gb}$$.

### Chemical Capacitance: Charge Storage by Changing Defect Concentration

Not all capacitance is purely geometric. In mixed ionic-electronic conductors, charge can also be stored by changing the concentration of mobile carriers or defects. This is called chemical capacitance (Jamnik1999).

For a carrier with charge $$q_i=z_ie$$ in volume $$V$$, the stored charge is

$$
Q_i=q_iVc_i.
$$

 The chemical capacitance is the derivative of stored charge with respect to electrochemical potential:

$$
C_{\mathrm{chem},i}=\frac{dQ_i}{d\tilde{\mu}_i/q_i}.
$$

 For an ideal dilute species,

$$
\tilde{\mu}_i=\tilde{\mu}_i^0+k_{\mathrm{B}}T\ln c_i.
$$

 Then

$$
\frac{d\tilde{\mu}_i}{dc_i}=\frac{k_{\mathrm{B}}T}{c_i}.
$$

 Also,

$$
\frac{dQ_i}{dc_i}=q_iV.
$$

 Therefore,

$$
\begin{aligned}
    C_{\mathrm{chem},i}
    &=\frac{dQ_i}{d\tilde{\mu}_i/q_i} \\
    &=q_i\frac{dQ_i}{d\tilde{\mu}_i} \\
    &=q_i\frac{dQ_i/dc_i}{d\tilde{\mu}_i/dc_i} \\
    &=q_i\frac{q_iV}{k_{\mathrm{B}}T/c_i} \\
    &=\frac{q_i^2Vc_i}{k_{\mathrm{B}}T} \\
    &=\frac{z_i^2e^2Vc_i}{k_{\mathrm{B}}T}.
\end{aligned}
$$

This is the ideal dilute, single-population result. A neutral stoichiometry change in a mixed conductor couples ionic and electronic populations, whose susceptibilities must be combined subject to electroneutrality. The effective chemical capacitance is not generally the sum of unconstrained single-carrier values; nonideal thermodynamic factors also matter. See [mixed conduction](#mixed-conduction-and-selective-contacts).

### Blocking Electrodes, Diffusion, and Warburg Behavior

When electrodes block ionic transfer, mobile ions or vacancies accumulate near the electrode at low frequency. The flux of an ionic defect follows the Nernst--Planck equation:

$$
J_i=-D_i\frac{dc_i}{dx}-\frac{z_ieD_i}{k_{\mathrm{B}}T}c_i\frac{d\phi}{dx}.
$$

 The first term is diffusion due to a concentration gradient; the second term is migration due to an electric-potential gradient. For semi-infinite diffusion, the impedance has the Warburg form

$$
Z_W=\frac{A_W}{\sqrt{\omega}}(1-j),
$$

which gives a $$45^{\circ}$$ line in a Nyquist plot. For finite-length diffusion with a transmissive remote boundary,

$$
Z_{\mathrm{FLW}}=R_D\frac{\tanh\left[(j\omega\tau_D)^{1/2}\right]}{(j\omega\tau_D)^{1/2}},
$$

 where

$$
\tau_D=\frac{L_D^{*2}}{D_i}.
$$

Here $$L_D^*$$ is a diffusion length, distinct from the Debye length. This tanh form approaches a finite resistance at low frequency. A blocking remote boundary instead gives a coth form with a low-frequency capacitive divergence; the two boundary conditions must not be interchanged.

### CPE Parameters as Defect-Disorder Indicators

Real ceramics often show depressed semicircles. The parallel $$R$$--CPE element has admittance

$$
Y^*=\frac{1}{R}+Q(j\omega)^n.
$$

 Using

$$
(j\omega)^n=\omega^n\left[\cos\left(\frac{n\pi}{2}\right)+j\sin\left(\frac{n\pi}{2}\right)\right],
$$

 write

$$
G=\frac{1}{R}, \qquad A=Q\omega^n, \qquad \theta=\frac{n\pi}{2}.
$$

 Then

$$
Y^*=G+A\cos\theta+jA\sin\theta.
$$

 The impedance is

$$
Z^*=\frac{1}{Y^*}
    =\frac{G+A\cos\theta-jA\sin\theta}{(G+A\cos\theta)^2+(A\sin\theta)^2}.
$$

 Therefore,

$$
-Z''=\frac{A\sin\theta}{G^2+2GA\cos\theta+A^2}.
$$

 To find the peak, differentiate with respect to $$A$$:

$$
\begin{aligned}
    \frac{d(-Z'')}{dA}
    &=\frac{\sin\theta(G^2-A^2)}{(G^2+2GA\cos\theta+A^2)^2}.
\end{aligned}
$$

For $$0<n\le1$$, the peak occurs when

$$
G^2-A^2=0,
$$

 so

$$
A=G.
$$

 Using $$A=Q\omega^n$$ and $$G=1/R$$,

$$
Q\omega_{\mathrm{max}}^n=\frac{1}{R}.
$$

 Therefore,

$$
\omega_{\mathrm{max}}=\left(\frac{1}{RQ}\right)^{1/n}
$$

 and

$$
f_{\mathrm{max}}=\frac{1}{2\pi}\left(\frac{1}{RQ}\right)^{1/n}.
$$

 An effective capacitance can be defined from $$C_{\mathrm{eff}}=1/(R\omega_{\mathrm{max}})$$:

$$
\begin{aligned}
    C_{\mathrm{eff}}
    &=\frac{1}{R}\left(RQ\right)^{1/n} \\
    &=Q^{1/n}R^{(1/n)-1} \\
    &=\left(QR^{1-n}\right)^{1/n}.
\end{aligned}
$$

 Values of $$n<1$$ commonly indicate a distribution of relaxation times caused by microstructural disorder, composition gradients, surface roughness, or a distribution of defect environments (Jonscher1983; Barsoukov2005).

### Atmosphere-Dependent Impedance as a Defect Diagnostic

A useful experimental strategy is to measure impedance as a function of oxygen partial pressure. If the fitted bulk resistance is converted to bulk conductivity,

$$
\sigma_b=\frac{L}{AR_b},
$$

 then the slope

$$
m=\frac{d\log\sigma_b}{d\log p_{\mathrm{O}_2}}
$$

 can be compared with defect-chemistry predictions.

| Dominant regime | Typical dependence | Interpretation |
| --- | --- | --- |
| Reduction-controlled electrons from oxygen loss | $$\sigma\propto p_{\mathrm{O}_2}^{-1/6}$$ | n-type electronic conduction coupled to $$V_{\mathrm{O}}^{\bullet\bullet}$$ formation. |
| Acceptor-controlled oxygen vacancies | $$\sigma\propto p_{\mathrm{O}_2}^0$$ | Extrinsic ionic conduction; vacancy concentration fixed by dopant/stoichiometry. |
| Oxidation-controlled holes with fixed vacancy concentration | $$\sigma\propto p_{\mathrm{O}_2}^{1/4}$$ | p-type conduction. |
| Strong blocking electrode polarization | Low-frequency capacitance increases strongly | Ionic accumulation at electrodes, not necessarily bulk conduction. |

The most reliable interpretation uses all of the following together:

$$
\boxed{R(T),\; C(T),\; f_{\mathrm{max}}(T),\; p_{\mathrm{O}_2}\text{ dependence},\; \text{microstructure},\; \text{composition}.}
$$

 A single semicircle is never, by itself, a unique proof of a particular defect mechanism.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Conduction Mechanisms and Application to KNN

### KNN-Specific Defect Chemistry Before Transport Analysis

KNN is an alkali niobate perovskite with approximate formula

$$
(\mathrm{K}_{0.5}\mathrm{Na}_{0.5})\mathrm{NbO}_3.
$$

 The A-site is occupied by $$\mathrm{K}^+$$ and $$\mathrm{Na}^+$$, while the B-site is occupied by $$\mathrm{Nb}^{5+}$$. During high-temperature sintering, alkali oxide volatility can produce A-site vacancies and oxygen vacancies. For potassium oxide loss,

$$
2\mathrm{K}_{\mathrm{K}}^{\times}+\mathrm{O}_{\mathrm{O}}^{\times}
    \rightleftharpoons
    \mathrm{K}_2\mathrm{O}(g)+2V_{\mathrm{K}}^{\prime}+V_{\mathrm{O}}^{\bullet\bullet}.
$$

 For sodium oxide loss,

$$
2\mathrm{Na}_{\mathrm{Na}}^{\times}+\mathrm{O}_{\mathrm{O}}^{\times}
    \rightleftharpoons
    \mathrm{Na}_2\mathrm{O}(g)+2V_{\mathrm{Na}}^{\prime}+V_{\mathrm{O}}^{\bullet\bullet}.
$$

 Both reactions are charge balanced because

$$
2(-1)+(+2)=0.
$$

 If alkali loss occurs without other compensating defects, the approximate stoichiometric relation is

$$
[V_{\mathrm{K}}^{\prime}]+[V_{\mathrm{Na}}^{\prime}]\approx 2[V_{\mathrm{O}}^{\bullet\bullet}].
$$

 This relation is not universal; it changes if electronic carriers, dopants, secondary phases, or non-equilibrium processing are important. However, it gives the basic reason why alkali volatility in KNN is often discussed together with oxygen-vacancy-related conduction.

Oxygen vacancies can also participate in reduction reactions that generate electrons:

$$
\mathrm{O}_{\mathrm{O}}^{\times}\rightleftharpoons \frac{1}{2}\mathrm{O}_2(g)+V_{\mathrm{O}}^{\bullet\bullet}+2e^{\prime}.
$$

 The electrons may localize on niobium sites:

$$
\mathrm{Nb}_{\mathrm{Nb}}^{\times}+e^{\prime}
    \rightleftharpoons
    \mathrm{Nb}_{\mathrm{Nb}}^{\prime}.
$$

 A corresponding small-polaron hopping step is

$$
\mathrm{Nb}_{\mathrm{Nb}}^{\prime}+\mathrm{Nb}_{\mathrm{Nb}}^{\times}
    \rightleftharpoons
    \mathrm{Nb}_{\mathrm{Nb}}^{\times}+\mathrm{Nb}_{\mathrm{Nb}}^{\prime}.
$$

 Therefore, KNN impedance can contain ionic transport by oxygen vacancies, electronic transport by small polarons, and interfacial blocking or space-charge effects. These processes may overlap, so assignment should be based on resistance, capacitance, activation energy, and atmosphere dependence rather than on activation energy alone (Hussain2018; Wang2019).

### Derivation of the Arrhenius Activation Energy

Standard thermally activated conductivity is described phenomenologically by the simple Arrhenius equation:

$$
\sigma(T) = \sigma_0 \exp\left( -\frac{E_a}{k_B T} \right)
$$

 By taking the natural logarithm, we obtain the linear form used for extracting the activation energy $$E_a$$:

$$
\ln \sigma = \ln \sigma_0 - \frac{E_a}{k_B} \left(\frac{1}{T}\right)
$$

To interpret a fitted ionic-transport slope, start from the **Nernst-Einstein relation** between conductivity and the conductivity diffusion coefficient (Maier2004):

$$
\sigma = \frac{n q^2 D}{k_B T}
$$

where $$n$$ is the mobile-carrier concentration and $$q$$ is the carrier charge, which may have a magnitude greater than the elementary charge. Here $$D$$ is a conductivity diffusion coefficient; converting a tracer coefficient requires the appropriate correlation convention.

The microscopic diffusion of ions through a lattice (hopping over energy barriers) is given by:

$$
D = \gamma a^2 \nu_0 \exp\left( \frac{\Delta S_m}{k_B} \right) \exp\left( -\frac{\Delta H_m}{k_B T} \right)
$$

 where $$\gamma$$ is a geometric factor, $$a$$ is the jump distance, $$\nu_0$$ is the attempt frequency (phonon frequency), $$\Delta S_m$$ is the entropy of migration, and $$\Delta H_m$$ is the enthalpy of migration (the energy barrier).

Substituting $$D$$ back into the Nernst-Einstein equation yields the complete expression for ionic conductivity:

$$
\sigma T = \left[ \frac{n q^2 \gamma a^2 \nu_0}{k_B} \exp\left(\frac{\Delta S_m}{k_B}\right) \right] \exp\left( -\frac{\Delta H_m}{k_B T} \right)
$$

This derivation reveals why impedance spectroscopy data for ionic conductors is frequently plotted as $$\ln(\sigma T)$$ vs $$1000/T$$ rather than just $$\ln(\sigma)$$ vs $$1000/T$$.

Furthermore, the activation energy ($$E_a$$) measured from the slope of such plots depends on the defect regime:

- **Extrinsic Region:** If carrier concentration $$n$$ is fixed by dopants or non-stoichiometry, $$E_a$$ solely represents the migration barrier: $$E_a = \Delta H_m$$.

- **Intrinsic Region:** The concentration contribution follows from the actual defect equilibrium. An isolated Frenkel-pair model with equal vacancy and interstitial populations gives $$n\propto\exp[-\Delta H_F/(2k_BT)]$$, hence $$E_a=\Delta H_m+\Delta H_F/2$$. This factor of one half is not universal. A stoichiometric full Schottky set in an $$AB\mathrm O_3$$ model contains five vacancies; with fixed site factors and no competing defects, each vacancy population scales as $$\exp[-\Delta H_S/(5k_BT)]$$ instead.

### Bridging Activation Energy and Fermi Energy

While ionic conduction depends on lattice enthalpies, electronic conduction (by electrons or electron holes) introduces the concept of the **Fermi Energy ($$E_F$$)**. Impedance spectroscopy in mixed ionic-electronic conductors like KNN often requires bridging the macroscopic activation energy $$E_a$$ with the microscopic $$E_F$$ (Tuller2011).

From solid-state semiconductor physics, the concentration of conduction band electrons $$n_e$$ is related to the energy difference between the conduction band edge ($$E_C$$) and the Fermi level ($$E_F$$):

$$
n_e = N_C \exp\left( -\frac{E_C - E_F}{k_B T} \right)
$$

 where $$N_C$$ is the effective density of states in the conduction band.

For band transport, this Boltzmann population must be combined with the appropriate band mobility. For localized small polarons, the relevant quantities are instead the occupied and available localized sites. One commonly used dilute, adiabatic mobility approximation is:

$$
\mu_e = \frac{\mu_0}{T} \exp\left( -\frac{E_{hop}}{k_B T} \right)
$$

Writing the compatible transport-active population as $$n_{\mathrm{tr}}=n_0\exp[-E_c^{\mathrm{eff}}/(k_BT)]$$ gives:

$$
\sigma_e T = e n_0 \mu_0 \exp\left( -\frac{E_c^{\mathrm{eff}} + E_{hop}}{k_B T} \right).
$$

For constant prefactors in this approximation,

$$
E_a = E_c^{\mathrm{eff}} + E_{hop}.
$$

The population term depends on the actual defect and electronic-state model. It need not equal $$E_C-E_F$$, and a measured conductivity slope does not directly locate the Fermi level. Processing and oxygen activity change both charge-state populations and transport barriers, so these contributions require separate evidence.

### Typical Activation Energies in KNN

In KNN-based ceramics, alkali loss can alter A-site and oxygen-related defects. The following energy ranges are examples reported or discussed for particular KNN systems, not universal boundaries between mechanisms. Composition, temperature interval, electrode conditions, and whether the fit uses $$\sigma$$, $$\sigma T$$, $$R$$, or a relaxation frequency must accompany any comparison (Hussain2018; Wang2019; Moulson2003):

- **0.4--0.6 eV (Low Temperature):** Often assigned to local defect motion, oxygen-vacancy-related relaxation, or small-polaron hopping of defect-trapped electrons.

- **0.9--1.1 eV (Bulk/Grain, High Temperature):** Frequently associated with thermally activated bulk transport, often involving oxygen-vacancy migration ($$V_O^{\bullet\bullet}$$) and/or coupled ionic-electronic defect processes.

- **1.2--1.4 eV (Grain Boundary):** Commonly consistent with grain-boundary transport where defect segregation, alkali non-stoichiometry, and space-charge barriers increase the apparent activation energy.

- **1.5--1.7 eV (Intrinsic/Highly Resistive Response):** Can appear when intrinsic formation contributions, strong trapping, or highly resistive regions contribute to the measured response. The assignment requires independent confirmation.

### Oxygen Migration Pathway

Regarding the physical pathway of conduction within the perovskite lattice:

- The **oxygen ion migration occurs through a saddle point**, which is geometrically represented by a triangle formed by two A-site cations and one B-site cation (Khan1998).

### Mott Variable Range Hopping (VRH)

#### Physical Significance

While Arrhenius behavior describes thermal excitation over a static barrier, Mott Variable Range Hopping (VRH) describes low-temperature charge transport in highly disordered systems. In such systems, electrons are trapped in localized states. At low temperatures, electrons lack the thermal energy to jump to their nearest spatial neighbor. Instead, they optimize their hopping probability by jumping to a state that is *spatially further away* but *energetically closer*.

#### Derivation of the Mott $$T^{-1/4}$$ Law

The probability $$P$$ of an electron hopping between two localized states depends on the spatial distance $$R$$ (quantum tunneling) and the activation energy $$\Delta E$$ (thermal excitation):

$$
P \propto \exp\left( -2\alpha R - \frac{\Delta E}{k_B T} \right)
$$

 where $$\alpha = 1/\xi$$ ($$\xi$$ is the localization length) and $$k_B$$ is the Boltzmann constant.

Let $$N(E_F)$$ be the density of states at the Fermi level. The average number of states available within a sphere of radius $$R$$ and an energy range $$\Delta E$$ is approximately 1:

$$
\frac{4}{3}\pi R^3 \cdot \Delta E \cdot N(E_F) \approx 1 \implies \Delta E \approx \frac{3}{4\pi R^3 N(E_F)}
$$

Substitute $$\Delta E$$ into the hopping probability and minimize the exponent $$p(R)$$ with respect to $$R$$:

$$
p(R) = 2\alpha R + \frac{3}{4\pi R^3 N(E_F) k_B T}
$$

$$
\frac{dp(R)}{dR} = 2\alpha - \frac{9}{4\pi R^4 N(E_F) k_B T} = 0 \implies R_{opt} = \left[ \frac{9}{8\pi \alpha N(E_F) k_B T} \right]^{1/4}
$$

Substituting $$R_{opt}$$ back into $$p(R)$$ yields:

$$
p_{opt} = 2\alpha R_{opt} + \frac{1}{3}(2\alpha R_{opt}) = \frac{8}{3}\alpha R_{opt} = \left( \frac{T_0}{T} \right)^{1/4}
$$

Thus, the conductivity $$\sigma$$ follows the Mott VRH equation:

$$
\sigma = \sigma_0 \exp\left[ -\left(\frac{T_0}{T}\right)^{1/4} \right]
$$

 where the characteristic temperature $$T_0$$ is defined as:

$$
T_0 = \frac{\beta \alpha^3}{k_B N(E_F)} = \frac{\beta}{k_B N(E_F) \xi^3}
$$

The numerical coefficient $$\beta$$ depends on the approximation and percolation model; values near 18--21 are commonly used in 3D treatments. The single-site optimization above establishes the exponent, not a universal numerical coefficient.

#### Interpretation of the Plot and Slope

By plotting $$\ln \sigma$$ versus $$T^{-1/4}$$, the data yields a straight line with a slope $$m$$:

$$
\ln \sigma = \ln \sigma_0 - T_0^{1/4} \cdot T^{-1/4} \implies m = -T_0^{1/4}
$$

To further verify whether the mechanism is Mott VRH or Arrhenius, the Zabrodskii W-plot can be used. It relies on the derivative of logarithmic conductivity:

$$
W = \frac{d(\ln \sigma)}{d(\ln T)}
$$

 Plotting $$\ln W$$ versus $$\ln T$$ yields a straight line with slope $$-p$$, where $$p \approx 0.25$$ indicates Mott VRH and $$p \approx 1$$ indicates Arrhenius NNH.

- **Small Slope ($$\vert m\vert $$ is small):** Indicates a high density of defect states at the Fermi level or weak localization, representing better conductivity.

- **Steep Slope ($$\vert m\vert $$ is large):** Indicates a low density of states or strong localization, representing highly insulating behavior.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Hopping Rates and Mobile-Ion Concentrations

The Almond-West analyses distinguish the frequency scale of a conductivity spectrum from its amplitude. Together, they can constrain a transport concentration; a dc conductivity value alone cannot separate concentration from mobility. The two 1983 papers, the 1984 extension, and the 1987 entropy analysis address different parts of this problem ([R1](#ref-almond1983a), [R2](#ref-almond1983b), [R3](#ref-almond1984), [R4](#ref-almond1987)).

### From the Conductivity Spectrum to a Crossover Frequency

For a genuine low-frequency bulk plateau followed by a power-law dispersion,

$$
\sigma'(\omega)=\sigma_{\mathrm{dc}}+A_\omega\omega^s,
\qquad 0<s<1.
$$

Define the observable crossover by equality of the two contributions:

$$
\omega_\times=\left(\frac{\sigma_{\mathrm{dc}}}{A_\omega}\right)^{1/s},
\qquad \sigma'(\omega_\times)=2\sigma_{\mathrm{dc}}.
$$

This is an algebraic property of the fit. Equating $$\omega_\times$$ to a microscopic hopping scale $$\omega_p$$ adds a physical assumption: the plateau and dispersion must arise from the same carrier population and compatible transport process. Electrode polarization, separate grain-boundary arcs, or ferroelectric relaxations can invalidate that interpretation.

With thickness $$L$$ and electrode area $$A_{\mathrm{el}}$$, convert raw impedance using

$$
\sigma'(\omega)=\frac{L}{A_{\mathrm{el}}}
\frac{Z'}{(Z')^2+(Z'')^2}.
$$

Use $$\operatorname{Re}(1/Z^*)$$, not $$1/Z'$$. If fitting in Hz, $$\sigma'(f)=\sigma_{\mathrm{dc}}+A_f f^s$$, then

$$
A_f=(2\pi)^s A_\omega,
\qquad f_\times=\left(\frac{\sigma_{\mathrm{dc}}}{A_f}\right)^{1/s},
\qquad \omega_\times=2\pi f_\times.
$$

### Deriving the Concentration Factor

Let $$N$$ be the number density of equivalent sites, $$c$$ their mobile-ion occupation fraction, $$a$$ the jump distance, and $$q$$ the carrier charge. In a simple site-blocking model,

$$
\begin{aligned}
n_{\mathrm{mob}}&=Nc,\\
D_\sigma&=\gamma a^2(1-c)\omega_p,\\
\sigma_{\mathrm{dc}}T
&=\frac{Nq^2a^2\gamma}{k_B}c(1-c)\omega_p.
\end{aligned}
$$

The factor $$(1-c)$$ represents an available destination site. The definition of $$\gamma$$ must consistently include the chosen geometry, correlations, and relation between spectral frequency and jump events. A separate factor of $$1/6$$ or a Haven correction must not be added twice.

Allowing different weights for local ac motion and long-range dc transport gives

$$
\begin{aligned}
\sigma'(\omega)&=K\omega_p+K'\omega_p^{1-s}\omega^s,\\
\omega_\times&=g\omega_p,
\qquad g=\left(\frac K{K'}\right)^{1/s}.
\end{aligned}
$$

The concentration-related observable and its interpretation are therefore

$$
Q_c(T)\equiv\frac{\sigma_{\mathrm{dc}}T}{\omega_\times},
\qquad
n_{\mathrm{eff}}\equiv Nc(1-c)
=\frac{gk_BQ_c}{\gamma q^2a^2}.
$$

Only when $$c\ll1$$ does $$n_{\mathrm{eff}}\simeq n_{\mathrm{mob}}$$. It is not the number of all Na, K, or O atoms, nor automatically the total oxygen-vacancy concentration. If $$K<K'$$, then $$g<1$$; setting $$g=1$$ overestimates the inferred concentration within this model.

For a known site density, define

$$
B=\frac{n_{\mathrm{eff}}}{N},
\qquad c=\frac{1\pm\sqrt{1-4B}}2.
$$

The model requires $$0\le B\le1/4$$. Conductivity determines $$c(1-c)$$, so choosing between the two roots requires independent site-occupancy information. An out-of-range result signals a problem with units, structural parameters, frequency interpretation, or the model.

### Separating Migration and Concentration Activation

If $$a$$, $$\gamma$$, and $$g$$ are nearly constant, write $$\omega_p\propto\exp[-E_m/(k_BT)]$$ and $$n_{\mathrm{eff}}\propto\exp[-E_c^{\mathrm{eff}}/(k_BT)]$$. Then

$$
E_{\sigma T}=E_m+E_c^{\mathrm{eff}},
\qquad E_{AT}=(1-s)E_m+E_c^{\mathrm{eff}},
$$

where the two slopes are extracted from $$\ln(\sigma_{\mathrm{dc}}T)$$ and $$\ln(A_\omega T)$$ against $$1/T$$. For approximately constant $$s$$,

$$
\begin{aligned}
E_m&=\frac{E_{\sigma T}-E_{AT}}s,\\
E_c^{\mathrm{eff}}&=\frac{E_{AT}-(1-s)E_{\sigma T}}s.
\end{aligned}
$$

When $$s(T)$$ changes, determine $$\omega_\times$$ separately at each temperature. The more direct comparison is

$$
E_\times=-k_B\frac{d\ln\omega_\times}{d(1/T)},
\qquad E_Q=-k_B\frac{d\ln Q_c}{d(1/T)}
=E_{\sigma T}-E_\times.
$$

Under the stated assumptions, $$E_\times$$ represents the hopping activation and $$E_Q$$ the effective concentration activation. If $$g$$ varies, $$E_Q=E_c^{\mathrm{eff}}+k_B\,d\ln g/d(1/T)$$ even when the other factors are fixed. Site availability, association, and correlation changes can also enter the concentration-related term. It should not be relabeled as an isolated-vacancy formation energy.

### Spectra Without a Clear Plateau

The 1984 extension describes two dispersive contributions:

$$
\sigma'(\omega)=A_1\omega^{n_1}+A_2\omega^{n_2},
\qquad 0\le n_1<n_2<1.
$$

Their intersection defines

$$
\begin{aligned}
\omega_\times&=\left(\frac{A_1}{A_2}\right)^{1/(n_2-n_1)},\\
\sigma_{\mathrm{ref}}&=A_1\omega_\times^{n_1}
=A_2\omega_\times^{n_2}
=\frac{\sigma'(\omega_\times)}2.
\end{aligned}
$$

For $$n_1>0$$, this expression tends to zero as $$\omega\to0$$. Thus $$\sigma_{\mathrm{ref}}$$ is an effective conductivity scale, not its mathematical dc limit. A weak low-frequency slope can substantially bias a plateau-based hopping estimate; the paper's mixed Na/Ag beta-alumina example differs by more than an order of magnitude.

A causal power-law term constrains both quadratures:

$$
\sigma^*(\omega)=\sum_{r=1}^{2}A_r\omega^{n_r}
\left[1+j\tan\left(\frac{\pi n_r}2\right)\right]
+j\omega\epsilon_0\epsilon_\infty.
$$

Fit or check the real and imaginary parts together and account for the dielectric background. If the crossover lies outside the measured band, or the exponents become too similar, its position may be poorly determined despite a visually good fit.

The LiGaO$$_2$$ example gives approximately 1.03 eV for $$\sigma_{\mathrm{ref}}T$$ and 0.81 eV for the crossover scale, supporting an additional effective population contribution near 0.22 eV in the model. Its modulus peak does not coincide with the crossover. Even the elementary conductivity-plus-background model gives

$$
\omega_{M'',\max}=\frac{\sigma_{\mathrm{dc}}}{\epsilon_0\epsilon_\infty},
$$

which is a macroscopic charge-relaxation scale rather than a general microscopic jump rate. The 1983 mobile-ion paper's note added in proof explicitly warns against identifying the two.

### Activation Entropy and the Conductivity Prefactor

The 1987 analysis emphasizes the activation free energy and effective attempt factor:

$$
\begin{aligned}
\omega_p&=\omega_0\exp\left(-\frac{\Delta G_m}{k_BT}\right),\\
\Delta G_m&=\Delta H_m-T\Delta S_m,\\
\omega_p&=\omega_0\exp\left(\frac{\Delta S_m}{k_B}\right)
\exp\left(-\frac{\Delta H_m}{k_BT}\right).
\end{aligned}
$$

A large prefactor can reflect activation entropy or collective motion, as well as the concentration and geometry already present in $$\sigma T$$. Estimating $$\Delta S_m=k_B\ln(\omega_e/\omega_0)$$ requires an independently justified $$\omega_0$$ and a compatible definition of rate. The conductivity intercept alone does not supply either quantity.

Large conductivity changes cannot be assigned to entropy merely because $$c(1-c)\le1/4$$: a small initial mobile population can still increase by many orders of magnitude. A superionic phase transition also does not generally imply that an isolated hopping barrier vanishes or that every ion becomes freely mobile.

### Practical Concentration Estimate

1. Identify the carrier and isolate a bulk response over a frequency range that contains the crossover.
2. Fit each temperature independently; retain $$\sigma_{\mathrm{dc}}$$, $$s$$, $$\omega_\times$$, uncertainty, and frequency-window dependence. Use $$\sigma_{\mathrm{ref}}$$ explicitly if a plateau is absent.
3. First compare $$Q_c=\sigma_{\mathrm{dc}}T/\omega_\times$$. Interpret it as a concentration indicator only after assessing changes in $$a$$, $$\gamma$$, $$g$$, and the transport mechanism.
4. For absolute estimates, evaluate $$n_{\mathrm{eff}}=gk_B\sigma_{\mathrm{dc}}T/(\gamma q^2a^2\omega_\times)$$ and state every assumed structural or correlation parameter.
5. Use S/m, m, C, K, and s$$^{-1}$$ to obtain m$$^{-3}$$. Multiply S/cm by 100; multiply angstroms by $$10^{-10}$$; divide m$$^{-3}$$ by $$10^6$$ for cm$$^{-3}$$. Use $$k_B$$ in J/K when $$q$$ is in C.

For the same material at the same temperature, if the prefactors and mechanism remain unchanged,

$$
\frac{n_{\mathrm{eff},2}}{n_{\mathrm{eff},1}}
=\frac{\sigma_{\mathrm{dc},2}}{\sigma_{\mathrm{dc},1}}
\frac{\omega_{\times,1}}{\omega_{\times,2}}.
$$

This relative estimate avoids some structural assumptions but does not remove changes in correlation or pathway. A shift of crossover frequency at constant $$Q_c$$ is consistent with a rate change; a change in $$Q_c$$ requires examination of the population and these other factors.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Mixed Conduction and Selective Contacts

### Transmission-Line Parameters and Boundary Conditions

[Bumberger, Nenning and Fleig (2024)](#ref-bumberger2024) connect ionic and electronic transport rails through distributed chemical storage. For a homogeneous slab, define

$$
\begin{aligned}
\sigma_{\mathrm{tot}}&=\sigma_i+\sigma_e,\\
\widetilde\sigma&=\frac{\sigma_i\sigma_e}{\sigma_i+\sigma_e},\\
\widetilde D&=\frac{\widetilde\sigma}{C_{\mathrm{chem}}^V},\\
\tau_D&=(R_i+R_e)C_{\mathrm{chem}}
=\frac{L^2}{\widetilde D}.
\end{aligned}
$$

Here $$R_i=L/(A_{\mathrm{el}}\sigma_i)$$, $$R_e=L/(A_{\mathrm{el}}\sigma_e)$$, and $$C_{\mathrm{chem}}=C_{\mathrm{chem}}^V A_{\mathrm{el}}L$$. Chemical capacitance is expressed for the same neutral stoichiometry variable and charge convention used to define $$\widetilde\sigma$$. The slower transport rail limits chemical equilibration even when the faster rail dominates the total conductivity.

Ignoring the high-frequency dielectric bypass and additional interfacial impedances, an ion-blocking, electron-reversible symmetric cell illustrates two limits:

$$
\begin{aligned}
R_\infty&=\frac{R_iR_e}{R_i+R_e},\\
Z^*(\omega)&=R_\infty+(R_e-R_\infty)\frac{\tanh u}{u},\\
u&=\sqrt{\frac{j\omega L^2}{4\widetilde D}},\\
Z^*(0)&=R_e.
\end{aligned}
$$

The faster ac response samples parallel transport; the steady current at ideal ion-blocking contacts is electronic. The low-frequency increment is $$R_e-R_\infty$$, not the ionic resistance. The factor four follows from the half-thickness diffusion distance in a symmetric cell. Interfacial capacitance, finite exchange, and nonideal blocking change this simplified response.

| Contact condition | Information available in a suitable model | Main qualification |
|---|---|---|
| Ion blocking, electron reversible | Electronic steady-state path and a parallel-transport limit | Leakage and surface oxygen exchange must be assessed |
| Electron blocking, ion reversible | Ionic path can be constrained | Blocking-layer resistance and interfaces must be included |
| Both species reversible | Chemical exchange and bulk transport are coupled | A simple two-arc decomposition may not separate them |
| Both species blocked | Charge accumulation can dominate low frequency | No finite dc conductance is implied by a high-frequency arc |

### Finite Diffusion and Thickness Scaling

Writing $$v=\sqrt{j\omega\tau_D}$$, two common diffusion elements have different remote boundaries:

$$
Z_{\mathrm{trans}}=R_D\frac{\tanh v}{v},
\qquad Z_{\mathrm{block}}=R_D\frac{\coth v}{v}.
$$

At $$\vert v\vert \gg1$$, both approach $$R_D/\sqrt{j\omega\tau_D}$$ and can show a $$45^\circ$$ segment. At low frequency,

$$
Z_{\mathrm{trans}}\to R_D,
\qquad Z_{\mathrm{block}}\simeq\frac{R_D}{j\omega\tau_D}+\frac{R_D}3.
$$

The full cell impedance can differ from an isolated diffusion element because other transport paths remain available. A fitted Warburg coefficient alone cannot determine diffusion without the relevant thermodynamic and geometric factors.

Thickness gives an additional constraint:

$$
C_{\mathrm{diel}}\propto A_{\mathrm{el}}/L,
\qquad C_{\mathrm{chem}}\propto A_{\mathrm{el}}L,
\qquad \tau_D\propto L^2.
$$

These scalings apply to a homogeneous, unchanged material and consistent contacts. A resistance and capacitance forming one arc need not belong to the same spatial layer. Likewise, changing only the surface-exchange kinetics can change the number and shape of visible arcs. If the frequency range misses the relevant asymptotes, several combinations of bulk and interfacial parameters can fit comparably well.

### PZT: Atmosphere and Electrode Controls

[Boukamp et al. (2004)](#ref-boukamp2004) separate ionic, electronic, grain-boundary, and electrode contributions in PZT by combining complex fitting with atmosphere and specimen-size experiments. Lower conductivity under nitrogen is consistent with a hole contribution in the studied regime. Ionic and electronic contributions evolve differently near the ferroelectric transition, so a single Arrhenius line for total conductivity can hide the change in weighting.

Their dense Au contacts help suppress oxygen exchange relative to more catalytically active contacts under those experimental conditions. This does not make Au a universally blocking electrode: morphology, temperature, gas access, and surface chemistry still matter. A size-dependent conductivity relaxation constrains diffusion and exchange jointly; equal surface chemistry does not eliminate the effect of surface-to-volume ratio on an exchange-limited response.

### NaNbO$$_3$$: Separating Two Ionic Species

[Liu et al. (2026)](#ref-liu2026) use A-site nonstoichiometry to tune Na- and oxygen-related transport in NaNbO$$_3$$-based ceramics. Average diffraction, local coordination, temperature-dependent spectra, oxygen activity, and 8YSZ interlayers are used together. An unchanged average phase does not imply unchanged local defect environments.

Because 8YSZ supports oxide-ion transport while blocking Na transport, the layered cell constrains the oxygen-related contribution. If electronic conduction is negligible and layer/interface resistances are correctly accounted for,

$$
\sigma_{\mathrm{Na}}\simeq\sigma_{\mathrm{tot}}-\sigma_{\mathrm O},
\qquad t_{\mathrm{Na}}\simeq1-\frac{\sigma_{\mathrm O}}{\sigma_{\mathrm{tot}}}.
$$

The Na-rich NCNZ specimen is estimated to have about 92% Na contribution at 500 $$^\circ$$C under that analysis. This is a conditional transport partition, not a universal Na transference number for NaNbO$$_3$$. Nominal Na excess does not independently establish interstitial Na; charge compensation, local structure, and possible secondary phases must also be checked. DRT peak separation alone cannot label a peak as Na or O transport.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Defect Redistribution, Grain Boundaries, and Fatigue

### CCTO: Internal Barriers and Local Voltage

[Adams, Sinclair and West (2006)](#ref-adams2006) compare fine-grained CCTO, roughly 3--5 micrometres, with an abnormally coarsened microstructure containing 100--300 micrometre grains and fine-grained regions. Au/In-Ga contacts, dc bias, and progressive thinning jointly support an internal barrier-layer interpretation. Similar spectra with two electrodes weaken a simple contact-only explanation but do not prove the absence of contact effects.

In a uniform series estimate,

$$
N_{gb}\simeq\frac Ld,
\qquad V_{gb}\simeq\frac{V_{\mathrm{app}}d}{L}.
$$

At $$L=2$$ mm and $$V_{\mathrm{app}}=15$$ V, $$d=5$$ and 100 micrometres give approximately 0.0375 and 0.75 V per boundary, respectively. These are voltage drops, not local fields. The depletion width is needed to estimate the latter.

For a symmetric double-Schottky barrier, one simplified zero-bias model gives

$$
\phi_b=\frac{qN_s^2}{8\epsilon N_d},
\qquad w=\sqrt{\frac{2\epsilon\phi_b}{qN_d}},
\qquad C_{A,0}=\frac{\epsilon}{2w},
$$

where $$\epsilon=\epsilon_0\epsilon_r$$, $$N_s$$ is the charged interface-state density per area, $$N_d$$ the donor-density scale, and $$w$$ the depletion width on each side. Changing trap occupancy can alter both resistance and capacitance without changing a geometrical boundary thickness. Extracting an absolute $$N_d$$ requires a justified local geometry, dielectric response, and barrier model.

For $$N$$ identical barriers in series, $$R_{gb}=Nr$$, $$C_{gb}=c_b/N$$, and $$R_{gb}C_{gb}=rc_b$$. Geometric normalization should remove a simple uniform thickness dependence. In coarse CCTO, thinning changes the accessible current network and effective barrier population, so normalized parameters can still change. Thickness dependence alone is therefore not proof of electrode polarization.

### BaTiO$$_3$$: Reoxidation and Bias Degradation

The paired studies by [Yang et al. (2004), Part I](#ref-yang2004a) and [Part II](#ref-yang2004b) connect electrical components to spatially resolved oxygen chemistry in Ni-BaTiO$$_3$$ multilayer capacitors.

| Treatment | Electrical observation | Local structural/chemical evidence | Interpretation |
|---|---|---|---|
| Low-oxygen co-firing | Relatively low insulation resistance | Defect-rich regions and a near-electrode oxygen gradient in EELS | Reduction is spatially nonuniform |
| Reoxidation, about 800 $$^\circ$$C | Grain, boundary, and contact resistances all increase | Fewer extended defects and a flatter measured oxygen profile | Oxygen uptake and barrier recovery occur together |
| Accelerated dc ageing, 140 $$^\circ$$C and 400 V | All three fitted resistances decrease | Greater cathode-side deficiency and Ti reduction | Redistribution weakens electrical blocking |

Part I proposes oxygen entry from the edges and rapid transport along Ni/ceramic interfaces before incorporation into the dielectric. This pathway is an interpretation informed by the observations and earlier tracer studies, not a directly imaged trajectory. Voltage contrast maps electrical inhomogeneity; it is not an oxygen-vacancy concentration map.

Part II reports local cathode-side composition near BaTiO$$_{2.74}$$ and a relative Ti-edge shift supporting reduction. These are local measurements, not a whole-device oxygen stoichiometry or a calibrated Ti$$^{3+}$$ fraction. Positively charged oxygen vacancies drift toward the cathode and redistribute around boundaries; within a closed, oxygen-blocked device, a local increase need not mean net vacancy generation. The proposed changes in amphoteric dopant occupancy are less directly established than the electrical and EELS observations.

For the reoxidized versus bias-degraded states, the resistance-fit activation energies change as follows:

| Component | Before degradation / eV | After degradation / eV |
|---|---:|---:|
| Electrode interface | $$1.45\pm0.02$$ | $$1.29\pm0.01$$ |
| Grain boundary | $$1.30\pm0.02$$ | $$1.23\pm0.01$$ |
| Grain interior | $$1.21\pm0.03$$ | $$1.11\pm0.02$$ |

They characterize fitted electrical processes, including barriers and populations, rather than uniquely measuring an oxygen-vacancy migration energy. This distinction matters when comparing thermal ageing with irradiation-induced conductivity changes.

### PZT Fatigue Can Change Resistance in Opposite Directions

[Prabakar and Mallikarjun Rao (2007)](#ref-prabakar2007) find increased resistance in fatigued soft PZT-5J and decreased resistance in fatigued hard PZT-4. Microcracking contributes to the soft-material interpretation; defect redistribution and conductive pathways are discussed for the hard material. The observations show that the label "fatigue" does not specify a single transport response.

An activation energy compatible with oxygen-vacancy motion does not identify the defect independently. Commercial soft/hard labels also do not specify a complete dopant chemistry. Mechanical damage, trap occupancy, boundary barriers, electrode chemistry, and domain history should be considered before attributing a resistance change to a change in vacancy concentration.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Radiation Defects and Functional Stability

### Separate the Perturbation from the Retained Defects

Irradiation can create electronic excitations, atomic displacements, implanted species, and local heating in different proportions. Total absorbed dose, dose rate, ion energy, fluence, displacement damage, temperature, atmosphere, electrical boundary conditions, and time after exposure describe different parts of the experiment.

| Quantity | Meaning | Limitation |
|---|---|---|
| Gy = J/kg | Absorbed energy per mass | Specify the absorbing or reference material |
| Gy/s | Absorbed-dose rate | Equal dose at different rates implies different exposure times |
| ions/cm$$^2$$ | Ion fluence | Does not specify energy deposition or retained damage |
| ions/(cm$$^2$$ s) | Ion flux | Sets exposure time together with fluence |
| dpa | Modelled displacement events per atom | Not the final stable-defect concentration |

One rad is 0.01 Gy. A value reported as Mrad(Si) remains a silicon-referenced dose; conversion to Gy(Si) does not determine the absorbed dose in another oxide. Photon irradiation cannot be equated to He implantation by matching a single scalar dose.

As a schematic kinetic model, vacancies and interstitials can obey

$$
\begin{aligned}
\frac{dc_v}{dt}&=G_v-k_{\mathrm{rec}}c_vc_i-k_{sv}c_v,\\
\frac{dc_i}{dt}&=G_i-k_{\mathrm{rec}}c_vc_i-k_{si}c_i.
\end{aligned}
$$

Generation, recombination, and loss to sinks compete. These equations omit clustering, reversible trapping, spatial gradients, and charge-state kinetics; they illustrate why retained damage depends on time and starting microstructure. The coefficients cannot be inferred from a single before/after measurement.

### Gamma-Irradiated MLCCs: Dose Rate and Recovery

[Yang et al. (2025)](#ref-yang2025) combine in situ capacitance with defect and local-polarization measurements. The investigated dose rates are 0.1, 0.001, and $$3.35\times10^{-6}$$ Gy/s. Within that device system, lower rates cause greater capacitance loss at comparable accumulated dose, termed enhanced low-dose-rate sensitivity. After exposure, the high-rate specimen partly recovers, while lower-rate specimens can continue degrading before recovery begins.

EPR, XPS, and STEM support changes in defect-related electronic states and local structure; PFM indicates greater switching constraints and internal bias. Some defect characterization uses Ce-doped BaTiO$$_3$$ as a model dielectric rather than directly sampling the entire commercial MLCC. These datasets cannot simply be combined into an absolute device-wide vacancy count.

The results are consistent with competition among trapping, migration, recombination, and domain-wall pinning. They do not show that a lower rate creates more defects per second. The reported approximately one-year full-recovery time is extrapolated from ageing curves. Time-matched unirradiated controls and fixed post-exposure measurement delays remain important when comparing dose rates.

### PZT-MgO Nanocomposites: Performance Retention and Its Limits

[Liu et al. (2025)](#ref-liu2025) study approximately 100 nm dendritic PZT-MgO films. Dense interphase boundaries alter the polar structure and breakdown paths; interface-assisted defect recombination is proposed as a radiation-tolerance mechanism.

| Gamma dose | Recoverable energy at 4 MV/cm / J cm$$^{-3}$$ | Near-breakdown energy / J cm$$^{-3}$$ |
|---|---:|---:|
| 0 | 99.0 | 217.8 |
| 20 Mrad(Si) | 96.0 | 197.8 |
| 40 Mrad(Si) | 85.8 | 156.9 |

The corresponding characteristic breakdown fields are about 7.1, 6.8, and 6.5 MV/cm. Equal-field retention and comparison near each specimen's breakdown answer different questions. The unirradiated maximum of 217.8 J/cm$$^3$$ is not the post-irradiation value.

At 40 Mrad(Si), local switching weakens, interface dislocation features increase, and Mg profiles broaden. These observations support inhomogeneous interface damage. The phase-field calculation treats polarization and breakdown with prescribed charge disorder; it does not calculate the full vacancy-generation and recombination kinetics. Performance retention is consistent with recombination but is not direct counting of annihilated vacancies.

For storage performance,

$$
U_{\mathrm{rec}}=\int_{P_r}^{P_{\max}} E\,dP,
\qquad \eta=\frac{U_{\mathrm{rec}}}{U_{\mathrm{rec}}+U_{\mathrm{loss}}}.
$$

A lower remanent polarization can improve storage efficiency while stronger domain pinning reduces piezoelectric response. Radiation stability must therefore be defined for the intended function. Thin-film high-field energy densities cannot directly predict bulk KNN performance.

### Pre-existing Defects Can Redirect Damage

| Study | Material and exposure | Main observation | Mechanistic boundary |
|---|---|---|---|
| [Daghbouj et al. (2026)](#ref-daghbouj2026) | C-preirradiated SiC, followed by 300 keV He at 750 $$^\circ$$C and $$10^{17}$$ ions/cm$$^2$$ | Dispersed small bubbles replace extended platelets and nanocracks in observed regions | Residual defects and strain remain; this is sequential treatment, not simultaneous irradiation |
| [Quan et al. (2025)](#ref-quan2025) | Nd$$_2$$O$$_3$$-enriched high-entropy zirconate pyrochlore, room-temperature 500 keV He | Fewer visible voids and stronger ordering at $$10^{17}$$ ions/cm$$^2$$ | Ordering weakens again at higher fluence; excess solute is not an independently measured interstitial population |
| [Uberuaga et al. (2015)](#ref-uberuaga2015) | MgAl$$_2$$O$$_4$$, MgGa$$_2$$O$$_4$$, MgIn$$_2$$O$$_4$$ under ion irradiation | Resistance to amorphization correlates differently with disorder energy than in pyrochlores | Recovery pathways depend on structural vacancies and kinetics; disorder energy alone is insufficient |

The SiC experiments use 0.25/0.36 dpa of C predamage before He implantation; these values are not the total displacement damage after He exposure. Pre-existing vacancy clusters can receive interstitials and distribute He among traps, reducing extended damage without producing a defect-free crystal. Positron parameters constrain vacancy-type environments but are sensitive to size, composition, He filling, and saturation; they are not direct vacancy counts.

In the high-entropy pyrochlore study, extra Nd$$_2$$O$$_3$$ introduces strain and dislocations before irradiation. Structural recovery supports a role for the initial defect distribution, but atom-by-atom recombination is not directly resolved. Its large-model DFT energies also have convergence limitations. Equilibrium defect-formation energies must not be inserted into a Boltzmann factor to claim the actual concentration under a driven irradiation experiment.

The spinel study distinguishes cation site exchange from transformation to a defect-rocksalt arrangement. Written relative to a rocksalt parent lattice,

$$
\left(\mathrm{Mg}_{1/4}\mathrm B_{1/2}\square_{1/4}\right)\mathrm O
$$

contains structurally unoccupied cation positions. This does not mean irradiation creates 25% new vacancies. Accessible local reordering paths help explain why a high-energy disordered state can recover rather than continue toward amorphization. Such structural vacancies are not interchangeable with alkali deficiency in KNN.

### Radiation-Induced Redox and Oxygen Exchange

[Tracy et al. (2015)](#ref-tracy2015) use penetrating high-energy Au and Xe ions, with electronic energy loss dominant in the sampled region. ThO$$_2$$ expands without detectable Th reduction, whereas CeO$$_2$$ shows Ce reduction and chemical expansion. Approximately 20 nm CeO$$_2$$ responds much more strongly than micrometre-scale material; in the Au comparison, its relative lattice-parameter increase is about 0.903%, versus about 0.066% for the coarse material. These are low-density powder compacts, not matched dense fine-grained ceramics.

XRD and XAS together separate some structural and redox contributions. An absorption-edge shift cannot be converted to an exact reduced-ion fraction without standards and a justified spectral model. The incident ions traverse the specimens, so the result should not be described as a stopped-ion implantation experiment. Interfaces and free surfaces can facilitate oxygen escape as well as defect removal; increasing their density is not universally beneficial.

For an alkali niobate, three different bookkeeping steps are useful:

$$
\begin{aligned}
\mathrm{Nb}_{\mathrm{Nb}}^{\times}+e^{\prime}
&\rightleftharpoons\mathrm{Nb}_{\mathrm{Nb}}^{\prime},\\
\mathrm O_{\mathrm O}^{\times}
&\rightleftharpoons V_{\mathrm O}^{\bullet\bullet}+\mathrm O_i^{\prime\prime},\\
\mathrm O_{\mathrm O}^{\times}+2\mathrm{Nb}_{\mathrm{Nb}}^{\times}
&\rightleftharpoons V_{\mathrm O}^{\bullet\bullet}
+2\mathrm{Nb}_{\mathrm{Nb}}^{\prime}+\tfrac12\mathrm O_2(g).
\end{aligned}
$$

They describe electron localization, an oxygen Frenkel pair, and coupled net oxygen loss/reduction, respectively. Observing reduced Nb alone does not identify which oxygen process occurred. These are candidate reactions for interpretation, not evidence that all occur in irradiated KNN.

For ideal A-stoichiometric $$(\mathrm K,\mathrm{Na})\mathrm{NbO}_{3-\delta}$$ with only Nb$$^{4+}$$/Nb$$^{5+}$$ compensation,

$$
f_{\mathrm{Nb}^{4+}}=2\delta.
$$

If oxygen vacancies alone cause the oxygen deficit, their fraction of regular oxygen sites is $$\delta/3$$. Alkali vacancies, dopants, holes, interstitials, or secondary phases invalidate this simple conversion. Localized Nb$$^{4+}$$ population is also not identical to the mobile-electron concentration inferred from conductivity.

### Implications for KNN Experiments

Initial alkali stoichiometry, oxygen activity, defect association, grain size, and poling history can all alter the response. Comparisons should include both the initial absolute performance and the fractional change after irradiation. A small loss from an already strongly pinned state does not necessarily indicate a better functional material.

The strongest sequence is to compare matched initial states, irradiate under defined conditions, and follow both electrical and defect-sensitive signals during recovery. Rapid electrical recovery can reflect detrapping or space-charge relaxation without vacancy annihilation. A structural change may instead involve slower migration, aggregation, or oxygen exchange. Annealing controls must reproduce the same thermal history.

For shallow ion damage, match measurement depth to the modified region. A roughly micrometre-scale layer can be diluted in bulk diffraction yet dominate through-thickness impedance if it becomes highly resistive. Conversely, a nearly unchanged average XRD pattern does not guarantee unchanged domain mobility, leakage, or piezoelectric response.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Octahedral Tilts and Ferroelectric Phase Selection

### Glazer Notation Describes Rotations, Not Polar Order

[Glazer (1972)](#ref-glazer1972) classifies simple corner-sharing octahedral rotation patterns using $$a$$, $$b$$, and $$c$$ for amplitudes about the pseudocubic axes. Equal letters denote equal amplitudes. Superscripts $$+$$ and $$-$$ describe in-phase and antiphase rotations along the corresponding axis; $$0$$ denotes no rotation about that axis. Corner sharing constrains the alternating rotations in perpendicular directions.

The original table lists 23 simple combinations, including the untilted case. This is the historical classification under its geometrical assumptions, not a statement that every real perovskite has only those distortions. Cation shifts, octahedral deformation, longer-period modulation, and local disorder require additional descriptors.

An antiphase tilt is not synonymous with an antipolar cation displacement or antiferroelectricity. The former describes oxygen-octahedron rotations; the latter concerns dipole arrangements and, for an antiferroelectric interpretation, their field response and competing polar state.

### Size Mismatch Is a Guide to Competing Instabilities

The tolerance factor $$t=(r_A+r_O)/[\sqrt2(r_B+r_O)]$$ gives a geometrical guide to A-site fit, with radii depending on coordination and composition. It does not determine the ground state alone. Covalency, B-site off-centering, short-range forces, strain, and the coupling among distortions all contribute.

| Material | Representative ambient structure or response | Structural interpretation |
|---|---|---|
| BaTiO$$_3$$ | Polar tetragonal state near room temperature | Cooperative Ti-O relative displacement produces net polarization |
| CaTiO$$_3$$ | Centrosymmetric tilted orthorhombic perovskite | Strong rotations and antipolar A-site shifts can coexist with suppressed net polar order |
| NaNbO$$_3$$ | Complex tilted, antipolar orthorhombic state near ambient conditions | Competing polar and antipolar modes; phase selection depends strongly on conditions |
| KNbO$$_3$$ | Polar orthorhombic state near room temperature | Nb-O polar instability develops long-range alignment |
| BaZrO$$_3$$ | Average cubic paraelectric perovskite near ambient conditions | Different Zr-O bonding and mode stiffness prevent a simple inference from BaTiO$$_3$$ |
| LiNbO$$_3$$ | Polar $$R3c$$ structure | A different corundum-related octahedral framework; Li and Nb shifts cannot be treated as a small-A cubic-perovskite limit |

This comparison is structural context rather than a set of conclusions from the tilt-classification paper. In particular, CaTiO$$_3$$ is not nonpolar because Ti is intrinsically unable to displace, and the larger K ion does not make all octahedral rotations impossible.

Replacing Na with K changes the preferred A-site coordination and lattice dimensions, which changes the relative stability of tilt, antipolar, and polar patterns. A schematic free energy can contain

$$
F=F_P(P)+F_Q(Q)+\lambda P^2Q^2
+\frac12\kappa_X X^2+\eta XQ_1Q_2+\cdots,
$$

where $$P$$ is a polar mode, $$Q$$ denotes rotation modes, and $$X$$ is an antipolar displacement. The last coupling is allowed only for appropriate mode symmetries. It can induce $$X=-\eta Q_1Q_2/\kappa_X$$, lowering the energy without creating net polarization. Positive $$\lambda$$ describes competition between polar and tilt amplitudes in this simplified model; its sign and magnitude are material-specific.

K substitution can weaken the energy advantage of an antipolar/tilted state and favor long-range polar order. It does not simply turn individual opposite dipoles around. Determining the actual path requires mode-resolved structure, composition, strain, and temperature information; tolerance factor alone does not predict the transition composition or prove the mechanism.

### LaAlO$$_3$$: Separate Rotation, Strain, and Defect Dynamics

[Hayward et al. (2005)](#ref-hayward2005) combine neutron diffraction, electrical response, calorimetry, optics, and Raman spectroscopy. The low-temperature phase is centrosymmetric $$R\bar3c$$ with $$a^-a^-a^-$$ tilts; it is not polar $$R3c$$.

| Measurement | Main information | Interpretation limit |
|---|---|---|
| Peak splitting and lattice metrics | Symmetry-breaking strain | Strain is coupled to, but distinct from, the tilt amplitude |
| Tilt-sensitive superlattice intensity | Approximately $$I_{\mathrm{sat}}\propto\phi^2$$ for small rotations | Refinement and structural assumptions are required |
| EPR crystal-field splitting | Local octahedral environment around a paramagnetic probe | It does not directly measure every octahedron's rotation |
| Raman soft modes | Dynamics of the structural instability | High-temperature modes can become obscured by the Rayleigh line |
| Electrical and mechanical relaxation | Thermally activated dynamics over different time scales | Similar activation trends alone do not identify a defect species |

In a simple elastic coupling $$F_{\mathrm{el}}=Ce^2/2+\lambda_e eQ^2$$, minimization gives $$e=-\lambda_e Q^2/C$$. Across the full measured range, however, octahedral deformation, strain, and rotation squared are not all related by constant proportionality.

Around 730 K, below the main cubic-rhombohedral transition, several slopes change. The authors discuss an additional process, possibly oxygen-vacancy aggregation and interaction with twin walls, using a coupled-order-parameter model. This is not a separately established static phase transition or direct proof of vacancy clusters. The conductivity-derived activation changes, roughly 1.37 and 0.65 eV in the rhombohedral and cubic regimes, can involve both transport and defect release; conductivity growth alone does not separate them.

### CaTiO$$_3$$ Thin Films: Symmetry Matters Beyond Mean Strain

[Biegalski et al. (2015)](#ref-biegalski2015) compare approximately 10 nm films on LSAT and NdGaO$$_3$$, with similar average tensile strains near 1.2% and 1.1%. Half-order diffraction and projected STEM rotations show different octahedral connectivity. The LSAT-supported film has a dielectric peak near 140 K and a 10 K remanent polarization around 5 microC/cm$$^2$$; the NGO-supported film gives approximately 70 K and 1.5 microC/cm$$^2$$. The measurements concern in-plane response using interdigitated electrodes.

These results support the effect of substrate-imposed tilt connectivity as well as average strain. A projected rotation angle is not the complete three-axis tilt pattern, and a tetragonal-looking lattice metric does not independently establish a particular polar space group.

**Correction to the original paper:** the [published erratum](https://doi.org/10.1063/1.4921711) replaces the erroneous Pnmb label with Pbnm/Pnma, with $$a^-a^-c^+$$ in the stated Pbnm setting. It also corrects the coordinate treatment and theoretical phase diagrams. For LSAT, the corrected transition boundary is better described by Fmm2; the original Fig. 5 assignment should not be reused. The experimental comparisons remain relevant.

### PZN-8%PT: Polarization Paths and the c-Axis Jump

[Ohwada et al. (2003)](#ref-ohwada2003) demonstrate that temperature and field do not uniquely specify the observed structure without its preparation path. Zero-field cooling produces an incompletely identified X state rather than the traditionally assumed rhombohedral state; [001] field cooling selects a cubic-to-tetragonal-to-$$M_C$$ sequence. Increasing field from the zero-field-cooled state gives an irreversible X-to-$$M_A$$-to-$$M_C$$ path.

Representative polarization directions in pseudocubic coordinates are

$$
\begin{aligned}
M_A:&\quad\mathbf P=(p,p,q),\quad 0<p<q,\\
M_C:&\quad\mathbf P=(p,0,q),
\end{aligned}
$$

with symmetry-related variants. $$M_A$$ lies in a $$\{110\}$$ mirror plane between [111] and [001], while the displayed $$M_C$$ variant lies in (010), between [100] and [001]. The polarization-rotation plane, strain state, and domain variants differ.

A c-axis jump is an abrupt change in the lattice parameter along the applied-field direction. A simple electrostrictive contribution is

$$
e_3=Q_{11}P_3^2+Q_{12}(P_1^2+P_2^2)+\cdots.
$$

A discontinuous change in the selected polarization/structural state can therefore produce a lattice jump; domain redistribution and heterogeneous strain modify the measured shape. In the paper, bulk neutron measurements show a more gradual $$M_C$$-to-tetragonal response with a small jump than the sharp surface-sensitive or macroscopic feature. A jump does not universally identify one phase without diffraction evidence.

For defect or irradiation comparisons, fix poling, cooling, field cycling, clamping, and waiting time. A change in a metastable phase or domain population can alter impedance and piezoelectricity even if the composition and nominal final temperature/field are unchanged.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## Measurement and Interpretation Checklist

| Observation | What it constrains | Additional evidence needed for a stronger claim |
|---|---|---|
| Conductivity changes | Sum of mobile populations and mobilities along accessible paths | Carrier selectivity, atmosphere, crossover scales, and barrier controls |
| $$M''$$ or $$Z''_{\mathrm{loss}}$$ peak shifts | An electrical time scale | Concurrent capacitance and resistance changes; independent microscopic dynamics |
| A new DRT peak | A feature within a chosen inverse representation | Frequency coverage, regularization stability, and physical controls |
| O 1s high-binding-energy component changes | Surface chemical/electronic environment | Adsorbates, charging, preparation effects, and independent defect probes |
| A reduced-cation signal appears | Local redox or trapped-electron population | Charge compensation, oxygen balance, spatial sensitivity, and mobile fraction |
| Geometrically normalized response depends on thickness | The homogeneous-layer model is incomplete | Contact controls, grain statistics, current paths, and damaged-layer depth |
| Average XRD phase is unchanged | No resolved average phase change | Local structure, strain, domain dynamics, and functional measurements |
| Performance recovers after irradiation | A reversible part of the response | Time-resolved defect/charge signals, atmosphere, and thermal controls |

For a transport comparison, retain raw complex spectra, specimen geometry, contacts, temperature history, atmosphere, excitation amplitude, fitting window, residuals, and parameter uncertainty. For irradiation, also retain source, energy, dose or fluence, rate, temperature, bias, and post-exposure delay. For ferroelectrics, include the preparation and poling path.

The main distinction throughout these notes is between a measured electrical parameter, a model-dependent transport population, and a chemically identified defect. Their agreement is evidence to establish through controls, not an identity to assume.

<p class="topic-return"><a href="#contents">Back to topics</a></p>

## References

### Literature Integrated from the Reading Notes

<span id="ref-almond1983a" class="reference-label">[R1]</span> Almond, D. P., Duncan, G. K. & West, A. R. [The determination of hopping rates and carrier concentrations in ionic conductors by a new analysis of ac conductivity](https://doi.org/10.1016/0167-2738%2883%2990079-6). *Solid State Ionics* **8**, 159--164 (1983).

<span id="ref-almond1983b" class="reference-label">[R2]</span> Almond, D. P. & West, A. R. [Mobile ion concentrations in solid electrolytes from an analysis of a.c. conductivity](https://doi.org/10.1016/0167-2738%2883%2990247-3). *Solid State Ionics* **9--10**, 277--282 (1983).

<span id="ref-almond1984" class="reference-label">[R3]</span> Almond, D. P., Hunter, C. C. & West, A. R. [The extraction of ionic conductivities and hopping rates from a.c. conductivity data](https://doi.org/10.1007/BF00549810). *Journal of Materials Science* **19**, 3236--3248 (1984).

<span id="ref-almond1987" class="reference-label">[R4]</span> Almond, D. P. & West, A. R. [The activation entropy for transport in ionic conductors](https://doi.org/10.1016/0167-2738%2887%2990078-6). *Solid State Ionics* **23**, 27--35 (1987).

<span id="ref-west1997" class="reference-label">[R5]</span> West, A. R., Sinclair, D. C. & Hirose, N. [Characterization of Electrical Materials, Especially Ferroelectrics, by Impedance Spectroscopy](https://doi.org/10.1023/A:1009950415758). *Journal of Electroceramics* **1**, 65--71 (1997).

<span id="ref-bumberger2024" class="reference-label">[R6]</span> Bumberger, A. E., Nenning, A. & Fleig, J. [Transmission line revisited: the impedance of mixed ionic and electronic conductors](https://doi.org/10.1039/D4CP00975D). *Physical Chemistry Chemical Physics* **26**, 15068--15089 (2024).

<span id="ref-boukamp2004" class="reference-label">[R7]</span> Boukamp, B. A., Pham, M. T. N., Blank, D. H. A. & Bouwmeester, H. J. M. [Ionic and electronic conductivity in lead-zirconate-titanate (PZT)](https://doi.org/10.1016/j.ssi.2004.03.005). *Solid State Ionics* **170**, 239--254 (2004).

<span id="ref-liu2026" class="reference-label">[R8]</span> Liu, Z. et al. [Tailoring sodium and oxygen mixed-ion conduction in the A-site non-stoichiometric NaNbO$$_3$$-based ceramics](https://doi.org/10.1038/s41467-026-69428-7). *Nature Communications* **17**, 2545 (2026).

<span id="ref-adams2006" class="reference-label">[R9]</span> Adams, T. B., Sinclair, D. C. & West, A. R. [Characterization of grain boundary impedances in fine- and coarse-grained CaCu$$_3$$Ti$$_4$$O$$_{12}$$ ceramics](https://doi.org/10.1103/PhysRevB.73.094124). *Physical Review B* **73**, 094124 (2006).

<span id="ref-yang2004a" class="reference-label">[R10]</span> Yang, G. Y. et al. [Oxygen nonstoichiometry and dielectric evolution of BaTiO$$_3$$. Part I: improvement of insulation resistance with reoxidation](https://doi.org/10.1063/1.1809267). *Journal of Applied Physics* **96**, 7492--7499 (2004).

<span id="ref-yang2004b" class="reference-label">[R11]</span> Yang, G. Y. et al. [Oxygen nonstoichiometry and dielectric evolution of BaTiO$$_3$$. Part II: insulation resistance degradation under applied dc bias](https://doi.org/10.1063/1.1809268). *Journal of Applied Physics* **96**, 7500--7508 (2004).

<span id="ref-prabakar2007" class="reference-label">[R12]</span> Prabakar, K. & Mallikarjun Rao, S. P. [Complex impedance spectroscopy studies on fatigued soft and hard PZT ceramics](https://doi.org/10.1016/j.jallcom.2006.07.108). *Journal of Alloys and Compounds* **437**, 302--310 (2007).

<span id="ref-yang2025" class="reference-label">[R13]</span> Yang, P. et al. [Insight into the effects of gamma radiation on MLCCs: from in situ capacitance experiments to physical mechanisms](https://doi.org/10.1038/s41467-025-64388-w). *Nature Communications* **16**, 9410 (2025).

<span id="ref-liu2025" class="reference-label">[R14]</span> Liu, Y. et al. [Radiation-hardened dendritic-like nanocomposite films with ultrahigh capacitive energy density](https://doi.org/10.1038/s41467-025-59225-z). *Nature Communications* **16**, 3882 (2025).

<span id="ref-daghbouj2026" class="reference-label">[R15]</span> Daghbouj, N. et al. [Defect landscape engineering suppresses helium damage in ceramics](https://doi.org/10.1038/s43246-026-01083-3). *Communications Materials* **7**, 97 (2026).

<span id="ref-quan2025" class="reference-label">[R16]</span> Quan, C., Fu, Q., Qiu, R., Zhao, G. & Xu, C. [Achieving superior radiation tolerance in ceramics via in-situ defect recombination](https://doi.org/10.1038/s41467-025-65545-x). *Nature Communications* **16**, 10502 (2025).

<span id="ref-uberuaga2015" class="reference-label">[R17]</span> Uberuaga, B. P. et al. [Opposite correlations between cation disordering and amorphization resistance in spinels versus pyrochlores](https://doi.org/10.1038/ncomms9750). *Nature Communications* **6**, 8750 (2015).

<span id="ref-tracy2015" class="reference-label">[R18]</span> Tracy, C. L. et al. [Redox response of actinide materials to highly ionizing radiation](https://doi.org/10.1038/ncomms7133). *Nature Communications* **6**, 6133 (2015).

<span id="ref-glazer1972" class="reference-label">[R19]</span> Glazer, A. M. [The classification of tilted octahedra in perovskites](https://doi.org/10.1107/S0567740872007976). *Acta Crystallographica B* **28**, 3384--3392 (1972).

<span id="ref-hayward2005" class="reference-label">[R20]</span> Hayward, S. A. et al. [Transformation processes in LaAlO$$_3$$: Neutron diffraction, dielectric, thermal, optical, and Raman studies](https://doi.org/10.1103/PhysRevB.72.054110). *Physical Review B* **72**, 054110 (2005).

<span id="ref-biegalski2015" class="reference-label">[R21]</span> Biegalski, M. D. et al. [Impact of symmetry on the ferroelectric properties of CaTiO$$_3$$ thin films](https://doi.org/10.1063/1.4918805). *Applied Physics Letters* **106**, 162904 (2015). Read together with the [erratum, **106**, 219901 (2015)](https://doi.org/10.1063/1.4921711).

<span id="ref-ohwada2003" class="reference-label">[R22]</span> Ohwada, K., Hirota, K., Rehrig, P. W., Fujii, Y. & Shirane, G. [Neutron diffraction study of field-cooling effects on the relaxor ferroelectric PZN-8%PT](https://doi.org/10.1103/PhysRevB.67.094111). *Physical Review B* **67**, 094111 (2003).

### Foundational References

J. T. S. Irvine, D. C. Sinclair, and A. R. West, "Electroceramics: Characterization by Impedance Spectroscopy," *Advanced Materials*, vol. 2, no. 3, pp. 132--138, 1990.

M. S. Khan, M. S. Islam, and D. R. Bates, "Dopant substitution and ion migration in the LaGaO3-based oxygen ion conductor," *The Journal of Physical Chemistry B*, vol. 102, no. 16, pp. 3099--3104, 1998.

J. Maier, *Physical Chemistry of Ionic Materials: Ions and Electrons in Solids*. John Wiley & Sons, 2004.

A. J. Moulson and J. M. Herbert, *Electroceramics: Materials, Properties, Applications*, 2nd ed. John Wiley & Sons, 2003.

H. L. Tuller and S. R. Bishop, "Point defects in oxides: resolving the macroscopic-atomistic divide," *Annual Review of Materials Research*, vol. 41, pp. 369--398, 2011.

F. Hussain, I. Sterianou, A. Khesro, D. C. Sinclair, and I. M. Reaney, "p-Type/n-type behaviour and functional properties of KxNa(1-x)NbO3 (0.49 $$\le$$ x $$\le$$ 0.51) sintered in air and N2," *Journal of the European Ceramic Society*, vol. 38, no. 7, pp. 3118--3126, 2018.

X. Wang, Y. Huan, Z. Wang, X. Lin, S. Huang, T. Wei, L. Li, and X. Wang, "Electrical conduction and dielectric relaxation mechanisms in the KNN-based ceramics," *Journal of Applied Physics*, vol. 126, no. 10, pp. 104101, 2019.

F. A. Kröger, *The Chemistry of Imperfect Crystals*, 2nd ed. Amsterdam: North-Holland, 1974.

J. R. Macdonald, Ed., *Impedance Spectroscopy: Emphasizing Solid Materials and Systems*. New York: Wiley, 1987.

E. Barsoukov and J. R. Macdonald, Eds., *Impedance Spectroscopy: Theory, Experiment, and Applications*, 2nd ed. Hoboken, NJ: Wiley-Interscience, 2005.

J. Jamnik and J. Maier, "Treatment of the impedance of mixed conductors: equivalent circuit model and explicit approximate solutions," *Journal of The Electrochemical Society*, vol. 146, no. 11, pp. 4183--4188, 1999.

A. K. Jonscher, *Dielectric Relaxation in Solids*. London: Chelsea Dielectrics Press, 1983.

N. F. Mott and E. A. Davis, *Electronic Processes in Non-Crystalline Materials*, 2nd ed. Oxford: Clarendon Press, 1979.

B. A. Boukamp, "A nonlinear least squares fit procedure for analysis of immittance data of electrochemical systems," *Solid State Ionics*, vol. 20, no. 1, pp. 31--44, 1986.
