export default async function sendEmail(data) {
  const response = await fetch('https://desolate-beach-83923.herokuapp.com/send-email', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res)

  return response
}
