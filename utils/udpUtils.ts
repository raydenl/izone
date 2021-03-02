import dgram from 'react-native-udp';

export const discoverBridge = new Promise((resolve, reject) => {
    const client = dgram.createSocket({ type: 'udp4' });

    client.bind(0, (err: any) => {
        if (err) reject(err);

        client.setBroadcast(true);

        client.on('message', (message, remote) => {
            console.log('Message received!');
            console.log(remote.address + ':' + remote.port + ' - ' + message);

            resolve(message.toString());
        });

        const message = 'IASD';
        client.send(message, 0, message.length, 12107, '255.255.255.255', (err) => {
            if (err) reject(err);

            console.log('Message sent!');
        });
    });
});