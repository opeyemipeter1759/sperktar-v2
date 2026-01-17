
'use server';

export async function submitContactForm(formData: FormData) {
  // For now, we'll just log the data to the console.
  // In a real application, you would send an email or save the data to a database.
  console.log('New contact form submission:');
  console.log('Name:', formData.get('fullName'));
  console.log('Email:', formData.get('email'));
  console.log('Message:', formData.get('message'));

  return { success: true, message: 'Thank you for your message!' };
}
