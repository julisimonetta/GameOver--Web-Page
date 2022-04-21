// const Constants = require("../constants")
const User = require("../models/usersModels.js");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

//SEND VERIFICATION EMAIL TO USER

const sendEmail = async (email, uniqueString) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "gameover.mindhub@gmail.com",
      pass: "Gameover026",
    },
  });

  let sender = "gameover.mindhub@gmail.com";
  let mailOptions = {
    from: sender,
    to: email,
    subject: "Hello, friend! Let's verify your email!",
    html: ` 
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 710px) {
  .u-row {
    width: 690px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 690px !important;
  }

}

@media (max-width: 710px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: calc(100% - 40px) !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #ffffff; } a { color: #f362c2; text-decoration: underline; } @media (max-width: 480px) { #u_content_heading_1 .v-container-padding-padding { padding: 80px 10px 10px !important; } #u_content_text_8 .v-container-padding-padding { padding: 10px 22px 70px !important; } }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;color: #ffffff">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: transparent;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: transparent;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 690px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-image: url('https://user-images.githubusercontent.com/75273639/162598955-1d7398ac-38c5-4e09-a43f-507e6ef10527.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:690px;"><tr style="background-image: url('https://user-images.githubusercontent.com/75273639/162598955-1d7398ac-38c5-4e09-a43f-507e6ef10527.png');background-repeat: no-repeat;background-position: center top;background-color: #ffffff;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="690" style="width: 690px;padding: 9px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 690px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 9px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:verdana,geneva;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:verdana,geneva;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://user-images.githubusercontent.com/75273639/162598984-efc09683-d9db-44d9-88db-96bf58843e5b.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 200px;" width="200"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_heading_1" style="font-family:verdana,geneva;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:verdana,geneva;" align="left">
        
  <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: tahoma,arial,helvetica,sans-serif; font-size: 34px;">
    <strong>HELLO, FRIEND!</strong>
  </h1>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:verdana,geneva;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:verdana,geneva;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="48%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px dotted #eccafa;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_8" style="font-family:verdana,geneva;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px 7px 20px;font-family:verdana,geneva;" align="left">
        
  <div style="color: #ffffff; line-height: 100%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 190%;"><span style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 18px; line-height: 34.2px;"><span style="line-height: 38px; font-family: 'Montserrat', sans-serif; font-size: 20px;"><span style="line-height: 38px; font-size: 20px;">You are almost there!</span></span><span style="line-height: 34.2px; font-size: 18px;"><br /></span></span></p>
<p style="font-size: 14px; line-height: 190%;"><span style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 18px; line-height: 34.2px;"><span style="line-height: 34.2px; font-family: 'Montserrat', sans-serif; font-size: 18px;"><span style="line-height: 34.2px; font-size: 18px;">Please verify your email and start adding games to your cart!</span></span></span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:verdana,geneva;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:11px;font-family:verdana,geneva;" align="left">
        
<div align="center">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:verdana,geneva;"><tr><td style="font-family:verdana,geneva;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://game-over-shop.herokuapp.com/api/verify/${uniqueString}" style="height:44px; v-text-anchor:middle; width:136px;" arcsize="32%" strokecolor="#d9f9ff" strokeweight="3px" fillcolor="#00c3f6"><w:anchorlock/><center style="color:#FFFFFF;font-family:verdana,geneva;"><![endif]-->
    <a href="https://game-over-shop.herokuapp.com/api/verify/${uniqueString}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:verdana,geneva;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #00c3f6; border-radius: 14px;-webkit-border-radius: 14px; -moz-border-radius: 14px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-width: 3px; border-top-style: solid; border-top-color: #d9f9ff; border-left-width: 3px; border-left-style: solid; border-left-color: #d9f9ff; border-right-width: 3px; border-right-style: solid; border-right-color: #d9f9ff; border-bottom-width: 3px; border-bottom-style: solid; border-bottom-color: #d9f9ff;">
      <span style="display:block;padding:11px;line-height:120%;"><span style="font-size: 18px; line-height: 21.6px; font-family: 'trebuchet ms', geneva;"><strong><span style="line-height: 21.6px; font-size: 18px;">VERIFY EMAIL</span></strong></span></span>
    </a>
  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 690px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #34495e;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:690px;"><tr style="background-color: #34495e;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="690" style="width: 690px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 690px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:verdana,geneva;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:28px 10px 30px;font-family:verdana,geneva;" align="left">
        
<div align="center">
  <div style="display: table; max-width:279px;">
  <!--[if (mso)|(IE)]><table width="279" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:279px;"><tr><![endif]-->
  
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 24px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 24px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://facebook.com/" title="Facebook" target="_blank">
          <img src="https://user-images.githubusercontent.com/75273639/162598839-f5a63a65-c1df-4ce9-95ae-7d44a2a7ca89.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 24px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 24px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://instagram.com/" title="Instagram" target="_blank">
          <img src="https://user-images.githubusercontent.com/75273639/162598841-97605f36-1ba2-4afb-ac06-d5280b725fde.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 24px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 24px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://twitter.com/" title="Twitter" target="_blank">
          <img src="https://user-images.githubusercontent.com/75273639/162598836-cee57b9d-a29e-4474-9e41-a5487cf1a4bd.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 24px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 24px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://youtube.com/" title="YouTube" target="_blank">
          <img src="https://user-images.githubusercontent.com/75273639/162598842-702cd22f-2721-4873-b5df-fc005905c821.png" alt="YouTube" title="YouTube" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://discordapp.com/" title="Discord" target="_blank">
          <img src="https://user-images.githubusercontent.com/75273639/162598838-4684a631-d0db-4175-be0f-f90d5308973b.png" alt="Discord" title="Discord" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 690px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:690px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="690" style="width: 690px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 690px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:verdana,geneva;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px;font-family:verdana,geneva;" align="left">
        
  <div style="color: #7e8c8d; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px; font-family: arial, helvetica, sans-serif;">&copy; 2022 - Copyright Game Over | All rights reserved</span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>

    
    `,
  };

  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent');
    }
  });
};

// USERS CONTROLLER

const usersController = {
  // VERIFY EMAIL

  verify_email: async (req, res) => {
    const { uniqueString } = req.params;

    const user = await User.findOne({ uniqueString: uniqueString });

    if (user) {
      user.verifiedEmail = true;
      await user.save();
      res.redirect('https://game-over-shop.herokuapp.com/');
    } else {
      res.json({ success: false, response: "Unverified email." });
    }
  },

  // SIGN UP

  sign_up_users: async (req, res) => {
    let { firstname, lastname, email, password, urlimage, country, from } =
      req.body.userData;

    try {
      //verifing if the email is already registered

      const existingUser = await User.findOne({ email });

      //if the user already exists

      if (existingUser) {
        console.log(existingUser.from.indexOf(from));

        if (existingUser.from.indexOf(from) === 0) {
          res.json({
            success: false,
            from: "signup",
            message: "User already registered, please log in.",
          });
        } else {
          const hashPass = bcryptjs.hashSync(password, 10);

          existingUser.from.push(from);

          existingUser.password.push(hashPass);

          //  if his/her sign up is from our form

          if (from === "form-Signup") {
            existingUser.uniqueString = crypto.randomBytes(20).toString("hex");

            await existingUser.save();

            await sendEmail(email, existingUser.uniqueString);

            res.json({
              success: true,
              from: "signup",
              message: "Please check your email to continue with your sign up.",
            });
          } else {
            existingUser.save();

            res.json({
              success: true,
              from: "signup",
              message: "We added " + from + " to your media to log in.",
            });
          }
        }
      } else {
        //if user doesnt exist

        const hashPass = bcryptjs.hashSync(password, 10);

        const setNewUser = await new User({
          firstname,
          lastname,
          email,
          password: [hashPass],
          uniqueString: crypto.randomBytes(20).toString("hex"),
          verifiedEmail: false,
          urlimage,
          country,
          from: [from],
          isAdmin:false
        });

	if(password.includes('gameoveradmin')){
		setNewUser.isAdmin = true
	}

        //  if user is signing up from Google/Facebook, he/she doesnt need to verificate email

        if (from !== "form-Signup") {
          await setNewUser.save();

          res.json({
            success: true,
            from: "signup",
            message: "Your account was created with" + " " + from.substring(0,1).toUpperCase() + from.substring(1)
          });
        } else {
          // else: send email to verificate

          await setNewUser.save();
          await sendEmail(email, setNewUser.uniqueString);

          res.json({
            success: true,
            from: "signup",
            firstname,
            lastname,
            message:
              "We sent you an email to validate your registration so you can continue with your sign up.",
          });
        }
      }
    } catch (error) {
      console.log(error);

      res.json({
        success: false,
        message: "Something went wrong, please try again.",
      });
    }
  },

  // LOG IN

  log_in_users: async (req, res) => {
    console.log(req.body.userData)
    const { email, password, from } = req.body.userData;

    try {
      // checks if user exists:

      const existingUser = await User.findOne({ email });

      // if the user doesnt exist:

      if (!existingUser) {
        res.json({
          success: false,
          message: "User doesn't exist, try signing up.",
        });
      } else {
        if (from !== "form-Login") {
          // user different from our form log in? okey, we verify if her/his pass matches

          let passMatches = existingUser.password.filter((pass) =>
            bcryptjs.compareSync(password, pass)
          );

          if (passMatches.length > 0) {
            const userData = {
              id: existingUser._id,
              firstname: existingUser.firstname,
              lastname: existingUser.lastname,
              urlimage: existingUser.urlimage,
              email: existingUser.email,
              from: existingUser.from,
              isAdmin: existingUser.isAdmin
            };

            await existingUser.save();

            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
              expiresIn: 60 * 60 * 24,
            });

            res.json({
              success: true,
              from: from,
              response: { token, userData },
              message:
                "Hello, " + userData.firstname + " " + userData.lastname + "!",
            });
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You haven't register with " +
                from +
                ". If you want to log in this way, you must sign up with " +
                from,
            });
          }
        } else {
          if (existingUser.verifiedEmail) {
            let passMatches = existingUser.password.filter((pass) =>
              bcryptjs.compareSync(password, pass)
            );

            if (passMatches.length > 0) {
              const userData = {
                id: existingUser._id,
                firstname: existingUser.firstname,
                lastname: existingUser.lastname,
                urlimage: existingUser.urlimage,
                email: existingUser.email,
                from: existingUser.from,
                isAdmin: existingUser.isAdmin
              };

              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24,
              });

              res.json({
                success: true,
                from: from,
                response: { token, userData },
                message:
                  "Welcome " +
                  userData.firstname +
                  " " +
                  userData.lastname +
                  "!",
              });
            } else {
              res.json({
                success: false,
                from: from,
                message: "Email and password do not match. Please try again",
              });
            }
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You haven't verified your email, please check your inbox and complete your sign up.",
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong, please try again.",
      });
    }
  },

  // VERIFY TOKEN

  verify_token: async(req, res) => {
    if (!req.err) {
      res.json({
        success: true,
        response: {
		id:req.user.id,
		firstname:req.user.firstname,
		lastname:req.user.lastname,
		email:req.user.verifiedEmail,
		urlimage:req.user.urlimage,
		country:req.user.country,
		isAdmin:req.user.isAdmin
        },
        message: "Welcome " + req.user.firstname,
      });
    } else {
      res.json({ success: false, message: "Please try logging in again." });
    }
  },
   // LOG OUT

 signOutUser: async (req, res) => {
  const email = req.body.closeuser;
  const user = await User.findOne({ email });
  await user.save();
  res.json(console.log("Closed session " + email));
},
};



module.exports = usersController;
