## 下载安装脚本
```bash
curl -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh
```

## 运行安装命令
```bash
bash install-release.sh
```

[Service]
ExecStart=
ExecStart=/usr/local/bin/v2ray run -config /usr/local/etc/v2ray/config.json

installed: /usr/local/bin/v2ray
installed: /usr/local/share/v2ray/geoip.dat
installed: /usr/local/share/v2ray/geosite.dat
installed: /usr/local/etc/v2ray/config.json
installed: /var/log/v2ray/
installed: /var/log/v2ray/access.log
installed: /var/log/v2ray/error.log
installed: /etc/systemd/system/v2ray.service
installed: /etc/systemd/system/v2ray@.service
removed: /tmp/tmp.pYxgp0hzKr
info: V2Ray v5.11.0 is installed.
You may need to execute a command to remove dependent software: apt purge curl unzip
Please execute the command: systemctl enable v2ray; systemctl start v2ray


```json
{
  "policy": {
    "system": {
      "statsInboundUplink": true,
      "statsInboundDownlink": true
    }
  },
  "log": {
    "access": "",
    "error": "",
    "path": "/home/proxy.log",
    "loglevel": "info"
  },
  "inbounds": [
    
    {
      "tag": "proxy_socks",
      "port": 13858,
      "listen": "0.0.0.0",
      "protocol": "socks"
    },
    {
      "tag": "proxy_http",
      "port": 13857,
      "listen": "0.0.0.0",
      "protocol": "http"
    },
    {
      "tag": "api",
      "port": 64158,
      "listen": "127.0.0.1",
      "protocol": "dokodemo-door",
      "sniffing": null,
      "settings": {
        "auth": null,
        "udp": false,
        "ip": null,
        "address": "127.0.0.1",
        "clients": null,
        "decryption": null
      },
      "streamSettings": null
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "v79.topman8846.cc",
            "port": 41379,
            "users": [
              {
                "id": "ae77ca80-965d-3787-b730-abe4ae898566",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": null
              }
            ]
          }
        ],
        "servers": null,
        "response": null
      },
      "streamSettings": {
        "network": "tcp",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": false,
          "serverName": "topmang.com"
        },
        "tcpSettings": null,
        "kcpSettings": null,
        "wsSettings": null,
        "httpSettings": null,
        "quicSettings": null
      },
      "mux": {
        "enabled": true,
        "concurrency": 8
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": null
      },
      "streamSettings": null,
      "mux": null
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": {
          "type": "http"
        }
      },
      "streamSettings": null,
      "mux": null
    }
  ],
  "stats": {},
  "api": {
    "tag": "api",
    "services": [
      "StatsService"
    ]
  },
  "dns": null,
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "port": null,
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
        "ip": null,
        "domain": null
      }
    ]
  }
}

```