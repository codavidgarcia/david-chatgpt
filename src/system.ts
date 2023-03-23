export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `
- Bienvenido a codavidgarcia Chat AI, puedes dejar tus comentarios en https://codavidgarcia.com
- Este es el resultado del esfuerzo de múltiples desarrolladores, en especial de ddui8081
- Si este proyecto es útil para usted, puede comprarme un café en paypal.me/cojuangarcia
- [[Shift]] + [[Enter]] Nueva línea. Escriba [[/]] o [[espacio]] al principio para buscar preajustes de solicitud. Haga clic en el cuadro de entrada para desplazarse hasta la parte inferior. `

export type Setting = typeof setting

export const resetContinuousDialogue = false
