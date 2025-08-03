# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form messages directly to your Gmail account.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 📧 Step 2: Add Email Service

1. **Login to EmailJS Dashboard**
2. Go to "Email Services" tab
3. Click "Add New Service"
4. Select "Gmail" as your email service
5. **Connect your Gmail account**:
   - Click "Connect Account"
   - Authorize EmailJS to access your Gmail
   - This allows emails to be sent from your Gmail account

## 📝 Step 3: Create Email Template

1. Go to "Email Templates" tab
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message from {{from_name}}

Hello Brodox,

You have received a new message from your portfolio website:

**From:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save the template** and note the Template ID (you'll need this)

## 🔑 Step 4: Get Your Credentials

1. **Service ID**: 
   - Go to "Email Services" 
   - Find your Gmail service
   - Copy the Service ID

2. **Template ID**:
   - Go to "Email Templates"
   - Find your template
   - Copy the Template ID

3. **Public Key**:
   - Go to "Account" → "API Keys"
   - Copy your Public Key

## ⚙️ Step 5: Update Your Code

Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY") // Your EmailJS Public Key

const response = await emailjs.send(
  'YOUR_SERVICE_ID',    // Your EmailJS Service ID
  'YOUR_TEMPLATE_ID',   // Your EmailJS Template ID
  templateParams
)
```

## 🔧 Step 6: Test the Setup

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Fill out the contact form** on your website
3. **Submit the form** - you should receive an email at georgebrodox@gmail.com
4. **Check your Gmail inbox** for the message

## 📱 Alternative: Formspree (Easier Setup)

If EmailJS seems complex, you can use Formspree instead:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Get your form endpoint URL
5. Update the contact form to use Formspree

### Formspree Implementation:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  setError('')
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    })

    if (response.ok) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    setError('Failed to send message. Please try again or contact me directly.')
  } finally {
    setIsSubmitting(false)
  }
}
```

## 🎯 Troubleshooting

### Common Issues:

1. **"Service ID not found"**
   - Make sure you copied the correct Service ID from EmailJS dashboard

2. **"Template ID not found"**
   - Verify your Template ID is correct
   - Make sure the template is published

3. **"Public Key invalid"**
   - Check your Public Key in the EmailJS dashboard
   - Make sure you're using the correct key

4. **Emails not received**
   - Check your Gmail spam folder
   - Verify your Gmail account is properly connected
   - Check EmailJS dashboard for any error logs

## 🔒 Security Notes

- **Public Key**: Safe to expose in frontend code
- **Service ID & Template ID**: Also safe to expose
- **Private Keys**: Never expose these (EmailJS handles this automatically)

## 📊 EmailJS Free Plan Limits

- **200 emails per month** (free plan)
- **Upgrade plans** available for more emails
- **No credit card required** for free plan

## 🚀 Production Deployment

When you deploy your site:
1. **Update the EmailJS credentials** with your production keys
2. **Test the contact form** on the live site
3. **Monitor your Gmail** for incoming messages

---

**Need Help?** 
- EmailJS Documentation: https://www.emailjs.com/docs/
- Formspree Documentation: https://formspree.io/docs/

Your contact form will now send real emails to your Gmail account! 🎉 