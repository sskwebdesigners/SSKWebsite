export type Enquiry = { name:string; business:string; email:string; country:string; phone:string; industry:string; service:string; budget:string; description:string; consent:boolean };
export async function submitEnquiry(data: Enquiry) {
  const base = import.meta.env.VITE_API_BASE_URL as string | undefined;
  if (!base) throw new Error('Online form submission is not configured yet. Please use WhatsApp to reach us.');
  const response = await fetch(`${base.replace(/\/$/, '')}/api/enquiries`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...data, submittedAt:new Date().toISOString()}) });
  if (!response.ok) throw new Error('We could not send your enquiry. Please try WhatsApp or email instead.');
  return response.json();
}
