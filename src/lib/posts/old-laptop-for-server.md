---
title: 'Old Laptop for server'
description: 'Great for running Linux-based home servers (Docker, Pi-hole, NAS, etc), Low power usage, built-in UPS (battery), Wi-Fi ready, and silent operation.'
imageUrl: 'https://www.techfinitive.com/wp-content/uploads/2023/02/what-is-a-server-jpg.webp'
---


### **Phase 1: Linux Distribution Installation**

The first step was getting a suitable Linux distribution running, but I immediately hit a roadblock.

*   **The Problem:** The hard drive was completely invisible in the boot menu. No matter which bootable USB I tried, the laptop's internal disk wouldn't show up as an installation target.
*   **Troubleshooting:** I spent hours trying various solutions—fiddling with boot flags, changing USB ports, and re-creating the installation media. Ultimately, the fix was surprisingly simple: a full BIOS reset. After resetting the BIOS to its factory defaults, the drive appeared, and I could proceed.
*   **Initial Choice - Manjaro:** I decided to install Manjaro Linux. I chose it primarily for its reputation as a lightweight and efficient distribution. Since I wanted the flexibility of a desktop environment for easier management, I opted for the full desktop version rather than a stripped-down server image.

<img src="/manjora-neofetch.png">

### **Phase 2: Setting Up SSH Access**

With the operating system installed, the next critical step was to enable remote access. For any "headless" server, SSH (Secure Shell) is essential.

*   I installed the OpenSSH server package.
*   Using `systemctl`, I enabled the SSH service to ensure it would launch automatically every time the server reboots.
*   After a quick configuration and test from another machine on my network, I had reliable remote access to the server's terminal.

### **Phase 3: Solving the Overheating Problem**

Running a server 24/7, even a low-power one, generates heat. This old laptop's cooling system wasn't designed for continuous operation, and I noticed the temperatures climbing.

*   **The DIY Solution:** Since the existing cooling block was inadequate, I decided on a hardware modification. I carefully drilled ventilation holes into the laptop's back case and mounted a small external fan directly over the CPU area. To power it, I wired a connector to one of the laptop's USB ports, providing a constant and simple power source for the fan.

### **Phase 4: Realizing I Chose the Wrong Distribution**

After using Manjaro for a while, I realized it wasn't the best fit for my specific needs and comfort level. This led me to switch distributions.

*   **The Switch:** I decided to move to **Linux Mint**.

#### **Pros of Switching to Linux Mint:**

*   **Lower RAM Usage:** Surprisingly, the Linux Mint XFCE edition consumed slightly less RAM at idle than my Manjaro setup, freeing up more resources for server applications.
*   **Familiar `apt` Commands:** I am much more accustomed to the Debian/Ubuntu ecosystem and its `apt` package manager. This made finding and installing server software feel more natural and efficient.

#### **Cons of the Switch:**

*   **The BIOS Nightmare:** This was a significant challenge. The process of installing another OS seemed to corrupt the bootloader or upset the fragile BIOS of this old machine. I ran into major issues getting the system to boot properly again. It was a tiring and frustrating experience that reminded me of the quirks of working with aging hardware.

<img src="/mint-neofetch.png">

---

### **Connect with me:**

You can follow my projects and connect with me through my social media channels:

💭 [Website](https://lightewriq.space/)

✔ [Github](https://github.com/ewriq)

🎀 [Linkedin](https://www.linkedin.com/in/ewriq/)

👻 [Instagram](https://www.instagram.com/ewriqs/)