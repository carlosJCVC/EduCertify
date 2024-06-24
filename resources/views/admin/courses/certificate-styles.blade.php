<style>
    body {
        font-family: 'Arial', sans-serif;
        text-align: center;
        margin: 0;
        padding: 0;
        background: #fff;
        border: 0;
        max-width: 100%;
        /* max-height: 100%;
        height: auto; */
        box-sizing: border-box;
        /* background-color: red; */
        position: relative;
        background-color: {{ $bg_color }}
    }

    p {
        margin: 0;
        padding: 0;
        color: {{ $text_color }};
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: hsla(23, 85%, 48%, 0.2);
        /* background-color: {{ $bg_color }} */
        /* Color de fondo como marca de agua */
        z-index: -1;
    }

    .watermark {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0.2;
    }

    .watermark img {
        max-width: 100%;
        height: auto;
    }

    .certificate-container {
        margin: 0;
        padding: 0;
        border: 10px solid #1E1E1E;
        width: 98%;
        height: auto;
        position: relative;
    }

    .certificate-container .certificate-header {
        font-size: 24px;
        font-weight: bold;
        width: 100%;
        height: 12%;
    }

    .certificate-container .certificate-header .logo {
        float: left;
        width: 30%;
        height: 100%;
        box-sizing: border-box;
    }

    .certificate-container .certificate-header .logo img {
        position: relative;
        top: -15px;
        max-width: 100%;
        height: 100%;
    }

    .certificate-container .certificate-header .title {
        float: left;
        width: 70%;
        height: 100%;
        box-sizing: border-box;
    }

    .certificate-container .certificate-header .title p {
        text-align: left;
        line-height: 1.5;
    }

    .certificate-container .certificate-title {
        font-size: 50px;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 30px;
    }

    .certificate-container .acknowledges {
        font-size: 35px;
        margin: 0;
    }

    .certificate-container .name {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
        font-family: 'Times New Roman', Times, serif;
    }

    .certificate-container .certificate-body {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .certificate-container .certificate-body .description {
        font-size: 23px;
        margin: 0;
    }

    .certificate-container .certificate-body .course-title {
        font-size: 40px;
        font-weight: 900;
        font-family: 'Times New Roman', Times, serif;
    }

    .certificate-container .certificate-pre-footer {
        display: block;
        width: 100%;
        height: 50px;
        margin-top: 20px;
    }

    .certificate-container .certificate-pre-footer .duration {
        float: left;
        width: 50%;
        font-weight: bold;
        box-sizing: border-box;
    }

    .certificate-container .certificate-pre-footer .date {
        float: left;
        width: 50%;
        box-sizing: border-box;
    }

    .certificate-container .certificate-footer {
        position: relative;
        width: 100%;
        height: 100px;
        margin-top: 120px;
        margin-bottom: 20px;
        box-sizing: border-box;
    }

    .certificate-container .certificate-footer .signature {
        width: 50%;
        float: left;
        position: absolute;
        bottom: 0;
        text-align: center;
    }

    .certificate-container .certificate-footer .signature .sign {
        width: 70%;
    }

    .certificate-container .certificate-footer .line {
        border-top: 1px solid #000;
        width: 80%;
        margin: 0 auto;
    }

    .signature .instructor-details,
    .signature .director-details {
        /* background-color: turquoise;    */
    }
</style>
