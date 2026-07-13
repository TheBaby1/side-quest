import { Resend } from 'resend';

export const sendContactMessage = async (req, res) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { firstName, lastName, email, phoneNumber, concern } = req.body;

        if (!firstName || !lastName || !email || !concern) {
            return res.status(400).json({ message: 'Please fill in all required fields!' });
        }

        const emailResult = await resend.emails.send({
            from: 'SideQuest Contact <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL],
            subject: `New message from ${firstName} ${lastName}`,
            html: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phoneNumber || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${concern}</p>
            `
        });

        res.status(200).json({ message: 'Message sent successfully!', result: emailResult})
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message})
    }
}