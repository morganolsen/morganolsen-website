import React, {useRef} from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';
import Background from './Background';
import Navigation from './Navigation';

const Contact = () => {

    const WholePage = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    `;

    const Container = styled.div`
        width: 95%;
        max-width: 1100px;
        display: flex;
        align-items: stretch;
        justify-content: space-evenly;
        flex-flow: row wrap;

        @media only screen and (max-width: 1300px) {
            margin-top: 60px;
        }
    `;

    const Content = styled.div`
        background-color: rgba(0,0,0,0.8);
        color: #fff;
        padding: 20px;
        flex-basis: 100%;
    `;

    const H1 = styled.h1`
        padding-top: 0;
        margin-top: 0;
    `;

    const Input = styled.input`
        width: 100%;
        height: 30px;
        border: 2px dotted #333;
        background-color: transparent;
        color: #fff;
        margin-bottom: 10px;
        margin-top: 5px;
        &:focus{
            outline: none;
        }
    `;

    const Textarea = styled.textarea`
        width: 100%;
        height: 100px;
        border: 2px dotted #333;
        background-color: transparent;
        color: #fff;
        margin-bottom: 10px;
        margin-top: 5px;
        &:focus{
            outline: none;
        }
    `;

    const Button = styled.button`
        width: 50%;
        height: 50px;
        border: 2px dotted #333;
        background-color: transparent;
        color: #fff;
        margin-bottom: 10px;
        margin-top: 5px;
        font-weight: bold;
        font-size: 20px;
        box-sizing: border-box;
    `;

    const email = useRef();
    const subject = useRef();
    const content = useRef();

    function getLineSeparator() {
        const textarea = document.createElement("textarea");
        textarea.value = "\n"; 
        return textarea.value;
    }

    const sendEmail = async (e) => {
        e.preventDefault();

        if(!email.current.value.length || !subject.current.value.length || !content.current.value.length){
            alert("Please fill out all fields before submitting.");
        }else{

            let message = content.current.value.replaceAll(getLineSeparator(), "<br />");
            console.log(JSON.stringify(message));
            const mailContent = `Sender: ${email.current.value}<br>Subject:${subject.current.value}<br><br>${message}`;
            const url = "https://smtpjs.com/v3/smtpjs.aspx?";


            const body = {
                Action: "Send",
                SecureToken: "93aa9ec2-7317-4063-8576-220302b2f339",
                To: "business@morganolsen.no",
                From: "business@morganolsen.no",
                Subject: "Contact Form Submission",
                Body: mailContent
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(body)
            });
            const form = document.getElementById("form");
            if(response.status === 200){
                form.innerHTML = "Thank you! Your message has been sent, and I'll get back to you as soon as possible!";
            }else{
                form.insertAdjecentHtml("<div style='color: red'>An error occured! Please try again later.</div>");
            }
        }
    }

    return (
        <>
            <Background url="/about_bg.jpg" />
            <BackButton />
            <Navigation />
            <WholePage>
                <Container>
                    <Content>
                        <H1>Contact</H1>
                        <p>Use this form to contact me. If you prefer using your own mail client, you may e-mail me on <a href="mailto:business@morganolsen.no">business@morganolsen.no</a>.</p>
                        <div id="form">
                            <form method="POST" onSubmit={sendEmail}>
                                <label htmlFor="email">Your e-mail address:</label>
                                <Input type="email" ref={email} name="email" id="email" />
                                <label htmlFor="subject">Subject:</label>
                                <Input type="text" name="subject" id="subject" ref={subject} />
                                <label htmlFor="content">Message:</label>
                                <Textarea name="content" ref={content} id="content"></Textarea>
                                <center><Button type="submit">Send</Button></center>
                            </form>
                        </div>
                    </Content>
                </Container>
            </WholePage>
        </>
    );
};

export default Contact;

// 93aa9ec2-7317-4063-8576-220302b2f339