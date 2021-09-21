export default function sendEmail(data) {
  fetch('https://desolate-beach-83923.herokuapp.com/send-email', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
