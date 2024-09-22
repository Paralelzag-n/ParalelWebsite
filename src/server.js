import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 


app.post('/send-email', async (req, res) => {
  const { fullName, businessEmail, companyName, heardAbout, helpYou, budget, projectDetails } = req.body;

 
  let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    secure: true,
    auth: {
      user: 'madtitan2002@gmail.com', 
      pass: 'apez ktmp pjlp dpfo', 
    },
  });

  let mailOptions = {
    from: businessEmail,
    to: 'tarkhna@gmail.com',
    subject: `New Project Inquiry from ${fullName}`,
    text: `
      Full Name: ${fullName}
      Business Email: ${businessEmail}
      Company Name: ${companyName}
      Heard About Us: ${heardAbout}
      Help Needed: ${helpYou}
      Budget: ${budget}
      Project Details: ${projectDetails}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send( error );
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
