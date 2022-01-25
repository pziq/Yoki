# Chapter 1

1. Waveshaping circuits
2. Transistor Biasing

---

# Waveshaping circuits

## Linear waveshapping circuits
waveshapping circuits that use linear elements (passive elements like R, C, L etc) are called Linear waveshaping circuits.

If we apply a sinusodal signal to the input of a linear waveshaping circuit , the output will be also a sinusodal signal where the amplitude and phase of the output will be determined by the circuit.
example : RL , RC , RLC circuits

another category of waveshaping circuits are non-linear wabeshapping circuits, here non-linear elements (active elements like diodes and transistor) will be present along with linear elements.

---
### Highpass RC
This circuit will pass only high frequencies

#### Working

![HP RC circuit](./Resources/C1_HPRC.png)

we know, the reactance of the capacitor is ,
$$
X_C = \frac{1}{j\omega c}
$$
so , we can say,
$$
X_C \propto \frac{1}{\omega}
$$
since $\omega = 2\pi f$ , we can say ,
$$
X_C \propto \frac{1}{f}
$$

Thus when frequency is low , the reactance of the capacitor will be very high , hence less current will be flow through the circuit and at high frequency the reactance will be low , so there will be a output .

#### frequency responce
The cutoff frequency $f_c$ will be the point where the gain becomes -3db. we can measure gain in db with 
$$
Gain_{db}=20log\frac{V_{out}}{V_{in}}
$$

From the circuit ,
$$
V_{out}=iR \tag{1}
$$
$$
V_{in}=i\bigg(R+\frac{1}{j\omega C}\bigg) \tag{2}
$$
so gain is, $\frac{(1)}{(2)}$ ie.
$$
gain = \frac{R}{R + \frac{1}{j\omega C}} 
$$
substituing $\omega=2\pi f$ ,
$$
gain = \frac{R}{R + \frac{1}{j2\pi f C}} 
$$
taking R as common from denominator and moving j to nearby numerator,
$$
gain = \frac{1}{1 - \frac{j}{2\pi f RC}} 
$$
now lets keep, $\frac{1}{2\pi RC} = f_1$ , which is the cutoff frequency.
$$
gain = \frac{1}{1 - j\frac{f_1}{f}} 
$$
now we have a complex equation connecting gain and frequency, if we take the magnitude of this gain,
$$
|gain|=\frac{1}{\sqrt[2]{1+\big(\frac{f_1}{f}\big)^2}}
$$

using the above equation we can draw the frequency responce of High pass filter. 

>note : if we keep $f_1=f$  ,  we will get gain as $\frac{1}{\sqrt[2]{2}}$, the db equivalent of this is -3db

![HP RC circuit](./Resources/C1_HPRCFR.png)
#### Responce to various inputs

##### Step input

If we take a step signal of amplitude V we can denote it as ,
$$
u_{(t)}= \begin{cases} v & \quad t >0 \\ 0&\quad t<0 \end{cases}
$$
Since RC circuits cannot reflect sudden chanes in input , at $t=0$ , the output will be same as input, after that the input signal will be gradually used to charge the capacitor , so the output will start to decay exponentially. This decay will follow ,
$$
V_{out}=Ve^{\frac{-t}{RC}}
$$
at $t=1RC$ , output will be equal to input , at $t=3RC$ the output will be decayed by almost 95%.

![HPRC STEP](./Resources/C1_HPRCSTEP.jpg)

##### square input