import React from 'react';
import { 
  Send, 
  MailWarning, 
  LogIn, 
  RefreshCcw, 
  ShieldAlert, 
  Paperclip, 
  Database, 
  Lock, 
  Server, 
  AlertTriangle 
} from 'lucide-react';

export const guidesData = [
  {
    id: 'emails-not-sending',
    title: 'Emails Not Sending',
    shortDesc: 'Fix emails stuck in outbox or delivery failure notifications.',
    icon: <Send />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    problem: "It's incredibly frustrating when you've drafted an important message, hit send, and then realize it's just sitting in your 'Outbox' or, worse, you get a 'Delivery Failed' bounce-back. This usually happens due to a breakdown in communication between your email app and the outgoing server (SMTP). Whether it's a transient connection glitch, an oversized attachment, or an authentication error, the result is the same: your message stays stuck and you're left wondering if it will ever reach its destination.",
    steps: [
      {
        title: "Verify Your Connection",
        desc: "Check if your device is actually online. Sometimes a quick toggle of your Wi-Fi or Airplane Mode can reset a 'frozen' connection that's preventing the mail from leaving."
      },
      {
        title: "Clear the Outbox Queue",
        desc: "Open your 'Outbox' folder. If you see a message with a large attachment (over 25MB), delete it. Oversized files often clog the 'pipeline' for all subsequent emails."
      },
      {
        title: "Check SMTP Authentication",
        desc: "Go to your account settings and find 'Outgoing Server' or 'SMTP'. Ensure that 'My outgoing server requires authentication' is checked. Without this, many servers will reject your mail."
      },
      {
        title: "Re-Compose & Resend",
        desc: "If a specific message is stubbornly stuck, copy the text, delete the stuck draft from the Outbox, and create a fresh new email. This clears temporary software glitches."
      }
    ],
    conclusion: "Most sending issues are resolved by clearing the outbox queue or verifying server authentication. Once these small hurdles are cleared, your emails should resume their normal, speedy delivery."
  },
  {
    id: 'cant-receive-emails',
    title: 'Can’t Receive Emails',
    shortDesc: 'Solve issues with missing emails or an inbox that won’t refresh.',
    icon: <MailWarning />,
    color: 'text-green-600',
    bg: 'bg-green-50',
    problem: "There's a specific kind of anxiety that comes with knowing someone sent you an email that hasn't shown up. You refresh the page, restart the app, and still—nothing. Your inbox feels frozen. This might be caused by a full mailbox, aggressive spam filters rerouting your mail, or a sync error where your device has stopped 'talking' to the incoming mail server (IMAP/POP). If your incoming mail stream has dried up, it's rarely a 'down' server and usually a configuration or storage bottleneck.",
    steps: [
      {
        title: "Audit Your Spam Folder",
        desc: "Check your 'Junk' or 'Spam' folders first. Often, legitimate mail is misidentified by over-protective filters. If found, mark it as 'Not Spam' to train the system."
      },
      {
        title: "Verify Account Storage",
        desc: "Log in to your webmail and check your storage quota. If you are at 100% capacity, the server will bounce all incoming mail back to the sender."
      },
      {
        title: "Confirm IMAP Settings",
        desc: "Ensure your incoming server address is correct. Most modern providers use IMAP on port 993 with SSL/TLS encryption. A wrong port will block all new mail."
      },
      {
        title: "Check Forwarding Rules",
        desc: "Look in your settings for any active 'Forwarding' or 'Rules'. You might have a rule accidentally sending your incoming mail to another address or the trash."
      }
    ],
    conclusion: "Receiving issues are typically tied to storage limits or filter settings. By auditing your filters and ensuring you have enough space, you can ensure every important message reaches you instantly."
  },
  {
    id: 'login-problems',
    title: 'Login Problems',
    shortDesc: 'Recover access when passwords fail or you’re stuck in a login loop.',
    icon: <LogIn />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    problem: "Getting locked out of your own email feels like being locked out of your digital life. You're certain you're typing the right password, yet the 'Invalid Credentials' error persists. Or perhaps you're stuck in a 'Login Loop' where the screen just refreshes back to the sign-in page. This can happen due to expired browser cookies, an out-of-sync Two-Factor Authentication (2FA) app, or a security block triggered by a new device or location. It's a security measure gone slightly too far, but it's solvable with the right verification steps.",
    steps: [
      {
        title: "Clear Browser Data",
        desc: "Clear your browser's cache and cookies. This is the #1 fix for 'Login Loops' where the page keeps refreshing without letting you in."
      },
      {
        title: "Sync Your 2FA Clock",
        desc: "If you use an authenticator app, ensure your phone's time is set to 'Automatic'. If your clock is off by even 30 seconds, your login codes will be rejected."
      },
      {
        title: "Trigger a Password Reset",
        desc: "Use the 'Forgot Password' link to send a reset code to your recovery phone or backup email. This overrides most local 'Invalid Credential' glitches."
      },
      {
        title: "Check for Security Alerts",
        desc: "Check your recovery email for a 'New Login Attempt' alert. You may need to click 'Yes, it was me' to remove a temporary security block on your account."
      }
    ],
    conclusion: "Security blocks are designed to protect you, not annoy you. By following the official recovery path and keeping your 2FA devices synced, you'll be back in your account safely and securely."
  },
  {
    id: 'email-not-syncing',
    title: 'Email Not Syncing',
    shortDesc: 'Ensure your inbox looks exactly the same on every device.',
    icon: <RefreshCcw />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    problem: "It's confusing when you delete an email on your phone but it's still there when you open your laptop. This 'Sync Gap' means your devices aren't communicating their actions to the central server. The most common culprit is using the older 'POP3' protocol, which was designed for a one-device world. In today's multi-device reality, if your 'Read' status or 'Deleted' actions aren't mirroring across your phone, tablet, and computer, your account settings are likely misaligned, leading to a cluttered and disorganized inbox experience.",
    steps: [
      {
        title: "Switch to IMAP Protocol",
        desc: "Ensure all your devices are using IMAP instead of POP3. IMAP is designed to sync actions across all devices, while POP3 is not."
      },
      {
        title: "Enable Push Notifications",
        desc: "In your app settings, set the 'Sync Frequency' to 'Push' or 'Automatic'. This ensures the server tells your device about changes immediately."
      },
      {
        title: "Check Background Data",
        desc: "Make sure your email app has permission to use 'Background Data' in your phone's settings. If restricted, it won't sync until you manually open the app."
      },
      {
        title: "Update the App",
        desc: "Ensure you are using the latest version of your email client. Outdated apps often have trouble maintaining a steady connection with modern sync servers."
      }
    ],
    conclusion: "Switching to IMAP is the ultimate fix for syncing headaches. Once your devices are all 'talking' the same language to the server, your email management becomes effortless and consistent."
  },
  {
    id: 'spam-junk-issues',
    title: 'Spam & Junk Issues',
    shortDesc: 'Take control of your inbox filters and stop the flood of junk.',
    icon: <ShieldAlert />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    problem: "A cluttered inbox full of 'junk' mail is more than just an annoyance; it's a productivity killer. Even worse is when a crucial work email or a message from a loved one gets buried in the 'Spam' folder where you might never see it. Spam filters are automated systems that occasionally make mistakes—either letting too much through or being too aggressive with legitimate mail. If you find yourself constantly digging through junk for 'real' mail, or if your primary inbox is a mess of marketing clutter, your filter settings need a manual tune-up.",
    steps: [
      {
        title: "Train the Filter",
        desc: "For any 'good' mail found in Spam, select it and click 'Not Spam'. This tells the server's AI to recognize that specific sender as trusted in the future."
      },
      {
        title: "Set Up a Whitelist",
        desc: "Add your most important contacts to your 'Safe Senders' list in settings. This ensures their mail never touches the junk folder, no matter the content."
      },
      {
        title: "Use Aggressive Blocking",
        desc: "For persistent marketing junk, use the 'Block' feature. This rejects the mail at the server level so it never even reaches your 'Deleted Items'."
      },
      {
        title: "Adjust Filter Sensitivity",
        desc: "In your webmail settings, look for 'Junk Email Protection'. Change the level from 'Exclusive' to 'Standard' if you are missing too many real emails."
      }
    ],
    conclusion: "Spam filters are learners. By consistently marking mail correctly and using safe-sender lists, you can transform your inbox back into a clean, focused environment for your actual priorities."
  },
  {
    id: 'attachment-issues',
    title: 'Attachment Issues',
    shortDesc: 'Fix problems with uploading, downloading, or opening files.',
    icon: <Paperclip />,
    color: 'text-red-600',
    bg: 'bg-red-50',
    problem: "Trying to send a file only to have it rejected, or trying to open an invoice only to see an 'Error' message, can bring your workday to a halt. Attachment issues usually stem from one of three things: file size limits (most providers cap at 25MB), prohibited file types (like .exe or .bat files that are blocked for security), or local software conflicts (like an antivirus program being too over-protective). If you can't get your documents from point A to point B via email, it's usually a safety protocol or a size constraint standing in your way.",
    steps: [
      {
        title: "Use Cloud Links for Large Files",
        desc: "If your file is over 20MB, don't attach it directly. Upload it to Google Drive or OneDrive and paste the link. This bypasses all server size limits."
      },
      {
        title: "Zip Suspicious Formats",
        desc: "If you're sending a code file or script, compress it into a .zip folder. Servers often block raw scripts but allow them inside a compressed archive."
      },
      {
        title: "Check Antivirus Settings",
        desc: "If you can't download a file, your antivirus might be blocking it. Try temporarily disabling 'Real-time Web Protection' to see if the download completes."
      },
      {
        title: "Try 'Save As' Instead",
        desc: "If clicking an attachment does nothing, right-click it and select 'Save Link As'. This often forces the browser to bypass internal preview errors."
      }
    ],
    conclusion: "Large files and 'suspicious' formats are the main causes of attachment failure. Using cloud links and compressed folders is the smartest way to ensure your files always reach their destination."
  },
  {
    id: 'storage-full',
    title: 'Storage Full',
    shortDesc: 'Clean up your mailbox and restore your ability to send and receive.',
    icon: <Database />,
    color: 'text-zinc-600',
    bg: 'bg-zinc-50',
    problem: "When you hit your email storage limit, your communication literally stops. You can't send new messages, and incoming mail is 'bounced' back to the sender with a 'Mailbox Full' error. It's easy to ignore those '90% full' warnings until it's too late. Modern email accounts often share storage with other services (like photos or cloud drives), so a few large video files elsewhere can suddenly kill your email functionality. A full storage status is a hard wall that requires immediate cleanup to restore your digital connectivity.",
    steps: [
      {
        title: "Search for Giant Emails",
        desc: "Use the search bar and type 'size:10mb'. This instantly lists your biggest space-wasters. Deleting just 10 of these can often free up 10% of your space."
      },
      {
        title: "Empty the Trash & Junk",
        desc: "Deleted items still count toward your storage limit! You must manually 'Empty Trash' and 'Empty Junk' to actually reclaim that space from the server."
      },
      {
        title: "Clean Up Cloud Storage",
        desc: "If you use Gmail or Outlook, your email storage is shared with Google Photos or OneDrive. Delete large backup videos to make room for new emails."
      },
      {
        title: "Archive to Local PC",
        desc: "Move older emails (from 2+ years ago) to a local 'Archive' folder on your computer. This removes them from the cloud while keeping them searchable."
      }
    ],
    conclusion: "Regular maintenance is the only way to avoid storage blocks. By clearing out large attachments and emptying the trash, you can keep your inbox running smoothly without ever hitting the limit."
  },
  {
    id: 'account-blocked',
    title: 'Account Blocked',
    shortDesc: 'Unlock your account after a security block or suspicious activity alert.',
    icon: <Lock />,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    problem: "Seeing the message 'Your account has been temporarily disabled' is a heart-stopping moment. It usually happens when your provider detects what they call 'Suspicious Activity'—this could be a login attempt from a new country while you're traveling, or too many failed password attempts. While it feels like an inconvenience, it's actually your provider's 'Self-Defense' mode kicking in to prevent a hacker from raiding your data. The goal now is to prove that you are the rightful owner and get the 'Green Light' to return to your inbox.",
    steps: [
      {
        title: "Access the Recovery Portal",
        desc: "Go to the official login page and click 'Having trouble signing in?'. This will take you to the secure identity verification system."
      },
      {
        title: "Enter the Verification Code",
        desc: "Request a code to be sent to your recovery phone number or backup email. Enter this code immediately, as they usually expire within 10-15 minutes."
      },
      {
        title: "Review Recent Activity",
        desc: "Once unlocked, check your 'Security' or 'Recent Activity' log. If you see a login you don't recognize, click 'Sign out of all other devices'."
      },
      {
        title: "Update Recovery Info",
        desc: "Ensure your backup phone number and secondary email are up to date. This ensures you can always get back in if another block occurs."
      }
    ],
    conclusion: "Security blocks are a sign that your provider is actively watching your back. Once you prove your identity, you'll be back in control with even stronger security than before."
  },
  {
    id: 'server-down',
    title: 'Server Down',
    shortDesc: "Troubleshoot connection errors and 'Server Not Responding' messages.",
    icon: <Server />,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    problem: "When your email app says 'Server Not Responding' or 'Connection to Server Failed,' it's easy to assume the entire system is broken. While major providers like Google or Microsoft do have occasional outages, 99% of 'Server Down' errors are actually local configuration issues. It might be a firewall blocking the connection, an outdated app that can no longer 'talk' to modern secure servers, or simply a typo in your server addresses. It feels like the whole world is offline, but usually, it's just a small 'wire' that's been tripped in your settings.",
    steps: [
      {
        title: "Check the Official Status",
        desc: "Search for '[Provider Name] Service Status' online. If the status is green, the problem is likely your local device or network settings."
      },
      {
        title: "Validate Port Numbers",
        desc: "Check your settings: Incoming (IMAP) should be port 993 with SSL. Outgoing (SMTP) should be port 465 or 587. Wrong ports cause 'Server Timeout' errors."
      },
      {
        title: "Toggle VPN/Firewall",
        desc: "If you use a VPN, try turning it off. Some VPN servers are blacklisted by email providers, causing them to block your connection entirely."
      },
      {
        title: "Refresh Account Settings",
        desc: "In your app, click 'Work Offline' and then 'Work Online'. This forces the app to try a fresh 'handshake' with the server, clearing temporary hangs."
      }
    ],
    conclusion: "True server outages are rare. By double-checking your port settings and server addresses, you can usually fix 'connection' errors yourself and get back online in minutes."
  },
  {
    id: 'phishing-alerts',
    title: 'Phishing Alerts',
    shortDesc: 'Identify and protect yourself from fraudulent emails and scams.',
    icon: <AlertTriangle />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    problem: "Phishing is the most dangerous threat to your email security. These are 'Wolf in Sheep's Clothing' emails—they look exactly like a message from your bank, Amazon, or even your own boss, but their goal is to steal your login info or install malware. They often use 'Urgency' as a weapon, telling you that your account will be deleted or that you've won a prize if you 'Click Here' immediately. Falling for a phishing scam can lead to identity theft, financial loss, and your own account being used to spread more scams to your friends and family.",
    steps: [
      {
        title: "Verify the Sender's Address",
        desc: "Don't trust the display name. Click it to see the actual email address. A real bank won't email you from 'support@secure-login-102.com'."
      },
      {
        title: "Check for 'Hover' Links",
        desc: "Hover your mouse over any button or link without clicking. Look at the bottom of your browser to see where the link *really* goes before you click it."
      },
      {
        title: "Enable 2-Factor Auth",
        desc: "Even if a scammer steals your password, they can't get in without the 2FA code from your phone. This is your ultimate safety net."
      },
      {
        title: "Report and Delete",
        desc: "Don't just delete it; click 'Report Phishing'. This helps your provider block that sender for everyone else, making the internet safer."
      }
    ],
    conclusion: "Vigilance is your strongest security tool. By staying skeptical of 'urgent' requests and verifying senders, you can keep your data safe from even the most clever digital predators."
  }
];
