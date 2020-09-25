import gab.opencv.*;
import processing.video.*;

import oscP5.*;
import netP5.*;

OscP5 oscP5;
// OscP5 sender;
NetAddress address;

OpenCV opencv;
Capture video;
// SerialSender sender;
int ledCount = 0;
byte buffer[];
PImage diff;
int contrast = -20;
int brightness = -100;
int selectedLED = 0;
int blur_amount = 4;
XML fixtures;

int index = 0;
int LED_PER_STRIP = 550;
int END_INDEX = LED_PER_STRIP*8;
ArrayList<PVector> list;
PVector position;
boolean go = false;


void setup(){

    // size(640,480,P2D);
    size(1280,720,P2D);

    video = new Capture(this, width, height, "/dev/video2");
    video.start();
    opencv = new OpenCV(this, width, height);
    // opencv.useColor();

    oscP5 = new OscP5(this,6670);
    address = new NetAddress("127.0.0.1", 6667);
    // for(String _str : Capture.list()){
    //     println(_str);
    // }
    frameRate(30);
    fixtures = new XML("fixture");
    list = new ArrayList();
    position = new PVector(0,0);
    setChan(index);
}

void stop() {
    saveXML(fixtures, "haha.xml");
    saveXML(fixtures, "hihi.xml");
}

void draw(){
    background(0);
    basicProcess();
    int modu = 15;


    position = opencv.max();

    if(go) {
        if(frameCount % modu == modu-1){
            if(index < END_INDEX){
                addLEDtoXML((int) position.x, (int)position.y, index);
                list.add(position.get());
                setChan(index);
                index++;
                fill(255);
                text(index, 20,20);
            }
            else {
                saveXML(fixtures, "haha.xml");
                saveXML(fixtures, "hihi.xml");

                exit();
            }
        }
    }

    blendMode(SCREEN);
    image(opencv.getOutput(), 0,0,width,height);

    noFill();
    blendMode(INVERT);
    stroke(0,255,0);
    strokeWeight(2);
    ellipse(position.x, position.y, 20, 20);
    strokeWeight(1);
    stroke(255);

    for(PVector _pos : list){
        ellipse(_pos.x, _pos.y, 10,10);
    }
    // if(diff != null) opencv.diff(diff);
}

void basicProcess(){
    opencv.loadImage(video);
    opencv.blur(blur_amount);
    // opencv.adaptiveThreshold(591, 1);
    // opencv.setGray(opencv.getB());
    opencv.brightness(brightness);
    // opencv.contrast(contrast);
}
/**
camera_capture = get_image()
gray = cv2.cvtColor(camera_capture, cv2.COLOR_BGR2GRAY)
(minVal, maxVal, minLoc, maxLoc) = cv2.minMaxLoc(gray)
cv2.circle(camera_capture,(maxLoc),10,(0,255,0),-1)
file = "images\image"+str(i)+".png"
cv2.imwrite(file, camera_capture)
**/



void setDiff(){
    basicProcess();
    diff = opencv.getOutput();
    println("set diff");
}
void captureEvent(Capture c) {
  c.read();
}

void mouseDragged(){
    contrast = ((int)map(mouseX, 0, width, 0, 255));
    brightness = ((int)map(mouseY, 0, height, -255, 255));
}

void keyPressed(){
    if(key == 'd'){
        setDiff();
    }
    else if(key == '-'){
        selectedLED--;
    }
    else if(key == '='){
        selectedLED++;
    }
    else if(key == 27){
        stop();
    }
    else if(key == 'g') {
        go = !go;
    }
    else if(key == 32){
        index = (ceil(index/LED_PER_STRIP)+1)*LED_PER_STRIP;
    }
    // selectedLED %= ledCount;
    println(selectedLED);
}

void setChannel(int _c, int _v) {
    OscMessage myMessage = new OscMessage("/fixtures/setchan/"+_c+"/"+_v);
    send(myMessage);
}
void setChan(int _i){
    OscMessage myMessage = new OscMessage("/fixtures/testchan/"+_i);
    send(myMessage);
}

// output command to freeliner
void send(OscMessage _osc){
    // sender.send(_osc);
    println(_osc);
    oscP5.send(_osc, address);
}

void addLEDtoXML(int _x, int _y, int _a){
    XML xyled = new XML("xyled");
    xyled.setFloat("a", _a*3);
    xyled.setFloat("x", _x);
    xyled.setFloat("y", _y);

    fixtures.addChild(xyled);
    point(_x, _y);
}
