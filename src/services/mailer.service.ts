export default async function sendEmail(data) {
  const response = await fetch('https://mailer-9eoeqsr24-aitorvelasco.vercel.app/send-email', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res)

  return response
}
