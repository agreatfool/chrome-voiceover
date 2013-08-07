<?php

function output($data) {
    echo $data; exit;
}

$action = $_REQUEST['action'];

if (!$action) {
    $action = 'GET';
}

$redis = new Redis();
$connected = $redis->connect('127.0.0.1', 6379, 0.5);

$key = 'VOICE_OVER_MODE';
$voiceoverMode = 0; // init with "false"

if (!$connected) {

    output($voiceoverMode); // not connected

} else {

    $voiceoverMode = $redis->get($key);
    if (false === $voiceoverMode) {
        // key not exists, put it "false"
        $voiceoverMode = 0;
        $redis->set($key, $voiceoverMode);
    }

}

switch ($action) {
    case 'GET':
        output($voiceoverMode);
        break;
    case 'REVERSE':
        if ($voiceoverMode == 0) {
            $voiceoverMode = 1;
        } else if ($voiceoverMode == 1) {
            $voiceoverMode = 0;
        } else {
            $voiceoverMode = 0;
        }
        $redis->set($key, $voiceoverMode);
        output($voiceoverMode);
        break;
    default:
        output($voiceoverMode);
        break;
}
