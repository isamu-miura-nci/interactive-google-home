const readlineSync = require('readline-sync');
const googlehome = require('google-home-notifier');

// デバイス名
const deviceName = process.argv[2] || '';
// 言語
const lang = process.argv[3] || 'ja';

// GoogleHomeのデバイス名を指定する
googlehome.device(deviceName, lang);

// コンソールに入力した文字をGoogleHomeに通知する関数
const notifyToGoogleHome = () => {
    return new Promise((resolve) => {
        console.log('何を話す？');
        // 入力を待機
        let input = readlineSync.question();
        if (input.length > 0) {
            // 入力された文字をGoogleHomeに通知する
            googlehome.notify(input, function(res) {
                // 送信後、1秒待ってからコールバックする
                setTimeout(() =>  resolve(), 1000);
            });
        } else {
            // 入力文字がなければすぐにコールバック
            resolve();
        }
        
    });
}
(async () => {
    while (true) {
        // ループして入力を待機する
        await notifyToGoogleHome();
    }
})();
