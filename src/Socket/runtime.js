import os from "os"

const OWNER = "6285743003734@s.whatsapp.net"

export async function initializeRuntime(sock) {
    try {
        const text = `*ARONA RUNTIME*

Bot       : ${sock.user?.id}
Name      : ${sock.user?.name}
Platform  : ${process.platform}
Node      : ${process.version}
CPU       : ${os.cpus()[0]?.model || "-"}
RAM       : ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB
Hostname  : ${os.hostname()}
Time      : ${new Date().toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta"
        })}`

        await sock.sendMessage(OWNER, { text })
    } catch {}
}
