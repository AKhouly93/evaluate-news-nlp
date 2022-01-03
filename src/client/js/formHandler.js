
export function handleSubmit(event) {
    event.preventDefault()
    let articleURL = document.getElementById('name').value
   if (Client.validateURL(articleURL) === true)
   {
        callAPI(articleURL);
   }else{
       alert('Please, enter a valid URL!');
   }
    
}
async function callAPI   (articleURL){
    const article = {'URL' : articleURL};
    const response = await fetch('http://localhost:3000/evaluate', {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(article)
  });

    try {
      const result = await response.json();
      document.getElementById('scoreTag').innerHTML = `Score tag: ${result.scoreTag.charAt(0).toUpperCase() + result.scoreTag.slice(1)}`;
      document.getElementById('confidence').innerHTML = `Confidence: ${result.confidence.charAt(0).toUpperCase() + result.confidence.slice(1)}`;
      document.getElementById('agreement').innerHTML = `Agreement: ${result.agreement.charAt(0).toUpperCase() + result.agreement.slice(1)}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${result.subjectivity.charAt(0).toUpperCase() + result.subjectivity.slice(1)}`;
    }catch(error) {
    console.log("error", error);
    }
}
