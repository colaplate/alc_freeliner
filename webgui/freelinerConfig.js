// auto generated by freeliner
var v0_NAME = 'AllSegments';
var v0_DESCRIPTION_ = 'Renders all segments';
var v1_NAME = 'SequentialSegments';
var v1_DESCRIPTION_ = 'Renders one segment per beat in order.';
var v2_NAME = 'RunThroughSegments';
var v2_DESCRIPTION_ = 'Render all segments in order in one beat.';
var v3_NAME = 'RandomSegment';
var v3_DESCRIPTION_ = 'Render a random segment per beat.';
var v4_NAME = 'FastRandomSegment';
var v4_DESCRIPTION_ = 'Render a different segment per frame';
var v5_NAME = 'SegmentBranch';
var v5_DESCRIPTION_ = 'Renders segment in branch level augmenting every beat';
var v6_NAME = 'RunThroughBranches';
var v6_DESCRIPTION_ = 'Render throught all the branch levels in one beat.';
var q0_NAME = '#000000';
var q0_DESCRIPTION_ = 'None';
var q1_NAME = '#FFFFFF';
var q1_DESCRIPTION_ = 'white';
var q2_NAME = '#FF0000';
var q2_DESCRIPTION_ = 'red';
var q3_NAME = '#00FF00';
var q3_DESCRIPTION_ = 'green';
var q4_NAME = '#0000FF';
var q4_DESCRIPTION_ = 'blue';
var q5_NAME = '#000000';
var q5_DESCRIPTION_ = 'black';
var q6_NAME = 'pallette 0';
var q6_DESCRIPTION_ = 'Color of 0 index in colorPalette';
var q7_NAME = 'pallette 1';
var q7_DESCRIPTION_ = 'Color of 1 index in colorPalette';
var q8_NAME = 'pallette 2';
var q8_DESCRIPTION_ = 'Color of 2 index in colorPalette';
var q9_NAME = 'pallette 3';
var q9_DESCRIPTION_ = 'Color of 3 index in colorPalette';
var q10_NAME = 'pallette 4';
var q10_DESCRIPTION_ = 'Color of 4 index in colorPalette';
var q11_NAME = 'pallette 5';
var q11_DESCRIPTION_ = 'Color of 5 index in colorPalette';
var q12_NAME = 'pallette 6';
var q12_DESCRIPTION_ = 'Color of 6 index in colorPalette';
var q13_NAME = 'pallette 7';
var q13_DESCRIPTION_ = 'Color of 7 index in colorPalette';
var q14_NAME = 'pallette 8';
var q14_DESCRIPTION_ = 'Color of 8 index in colorPalette';
var q15_NAME = 'pallette 9';
var q15_DESCRIPTION_ = 'Color of 9 index in colorPalette';
var q16_NAME = 'pallette 10';
var q16_DESCRIPTION_ = 'Color of 10 index in colorPalette';
var q17_NAME = 'pallette 11';
var q17_DESCRIPTION_ = 'Color of 11 index in colorPalette';
var q18_NAME = 'RepetitionColor';
var q18_DESCRIPTION_ = 'Cycles through colors of the pallette';
var q19_NAME = 'RandomPrimaryColor';
var q19_DESCRIPTION_ = 'Primary color that should change every beat.';
var q20_NAME = 'PrimaryBeatColor';
var q20_DESCRIPTION_ = 'Cycles through primary colors on beat.';
var q21_NAME = 'HSBFade';
var q21_DESCRIPTION_ = 'HSBFade stored on template/event.';
var q22_NAME = 'FlashyPrimaryColor';
var q22_DESCRIPTION_ = 'Random primary color every frame.';
var q23_NAME = 'FlashyGray';
var q23_DESCRIPTION_ = 'Random shades of gray.';
var q24_NAME = 'RGB';
var q24_DESCRIPTION_ = 'Random red green and blue value every frame.';
var q25_NAME = 'Strobe';
var q25_DESCRIPTION_ = 'Strobes white';
var q26_NAME = 'Flash';
var q26_DESCRIPTION_ = 'Flashes once per beat.';
var q27_NAME = 'JahColor';
var q27_DESCRIPTION_ = 'Red Green Yellow';
var q28_NAME = 'CustomColor';
var q28_DESCRIPTION_ = 'Custom color for template.';
var q29_NAME = 'MillisFade';
var q29_DESCRIPTION_ = 'HSB fade goes along with millis.';
var q30_NAME = 'HSBLerp';
var q30_DESCRIPTION_ = 'HSB fade through beat.';
var e0_NAME = 'Interpolator';
var e0_DESCRIPTION_ = 'Pics a position in relation to a segment';
var e1_NAME = 'CenterSender';
var e1_DESCRIPTION_ = 'Moves between pointA and center';
var e2_NAME = 'CenterSender';
var e2_DESCRIPTION_ = 'Moves between pointA and center';
var e3_NAME = 'HalfWayInterpolator';
var e3_DESCRIPTION_ = 'Moves along segment, but halfway to center.';
var e4_NAME = 'RandomExpandingInterpolator';
var e4_DESCRIPTION_ = 'Provides an expanding random position between segment and center.';
var e5_NAME = 'RandomInterpolator';
var e5_DESCRIPTION_ = 'Provides random position between segment and center.';
var e6_NAME = 'DiameterInterpolator';
var e6_DESCRIPTION_ = 'Rotates with segments as diameter.';
var e7_NAME = 'RadiusInterpolator';
var e7_DESCRIPTION_ = 'Rotates with segments as Radius.';
var e8_NAME = 'SegmentOffsetInterpolator';
var e8_DESCRIPTION_ = 'Prototype thing that offsets the position according to segments X position.';
var e9_NAME = 'OppositInterpolator';
var e9_DESCRIPTION_ = 'invert direction every segment';
var a0_b0_NAME = 'PointBrush';
var a0_b0_DESCRIPTION_ = 'Adjust its size with `w`.';
var a1_b0_NAME = 'line';
var a1_b0_DESCRIPTION_ = 'Perpendicular line brush';
var a2_b0_NAME = 'circle';
var a2_b0_DESCRIPTION_ = 'Brush witha circular appearance.';
var a3_b0_NAME = 'chevron';
var a3_b0_DESCRIPTION_ = 'Chevron v shaped style brush';
var a4_b0_NAME = 'square';
var a4_b0_DESCRIPTION_ = 'Square shaped brush';
var a5_b0_NAME = '+';
var a5_b0_DESCRIPTION_ = '+ shaped brush';
var a6_b0_NAME = 'triangle';
var a6_b0_DESCRIPTION_ = 'Triangular brush.';
var a7_b0_NAME = 'sprinkle';
var a7_b0_DESCRIPTION_ = 'ms paint grafiti style';
var a8_b0_NAME = 'leaf';
var a8_b0_DESCRIPTION_ = 'legalize it';
var a9_b0_NAME = 'custom';
var a9_b0_DESCRIPTION_ = 'Template custom shape, add template to geometryGroup and press `ctrl-d` to set as custom shape.';
var a0_b0_NAME = 'BrushPainter';
var a0_b0_DESCRIPTION_ = 'Place brush onto segment. Affected by `e`.';
var a0_b1_NAME = 'FunLine';
var a0_b1_DESCRIPTION_ = 'Makes a line between pointA and a position.';
var a1_b1_NAME = 'FullLine';
var a1_b1_DESCRIPTION_ = 'Draws a line on a segment, not animated.';
var a2_b1_NAME = 'MiddleLine';
var a2_b1_DESCRIPTION_ = 'line that expands from the middle of a segment.';
var a3_b1_NAME = 'TrainLine';
var a3_b1_DESCRIPTION_ = 'Line that comes out of point A and exits through pointB';
var a4_b1_NAME = 'Maypole';
var a4_b1_DESCRIPTION_ = 'Draw a line from center to position.';
var a5_b1_NAME = 'SegToSeg';
var a5_b1_DESCRIPTION_ = 'Draws a line from a point on a segment to a point on a different segment. Affected by `e`';
var a6_b1_NAME = 'AlphaLine';
var a6_b1_DESCRIPTION_ = 'modulates alpha channel, made for LEDs';
var a0_b3_NAME = 'Painter';
var a0_b3_DESCRIPTION_ = 'Paints stuff';
var a1_b3_NAME = 'Painter';
var a1_b3_DESCRIPTION_ = 'Paints stuff';
var a0_b4_NAME = 'TextWritter';
var a0_b4_DESCRIPTION_ = 'Fit a bunch of text on a segment';
var a1_b4_NAME = 'ScrollingText';
var a1_b4_DESCRIPTION_ = 'Scrolls text, acording to enterpolator';
var a0_b5_NAME = 'Elliptic';
var a0_b5_DESCRIPTION_ = 'Makes a expanding circle with segment as final radius.';
var b0_NAME = 'BrushSegment';
var b0_DESCRIPTION_ = 'Render mode for drawing with brushes';
var b1_NAME = 'LineSegment';
var b1_DESCRIPTION_ = 'Draw lines related to segments';
var b2_NAME = 'PersegmentRender';
var b2_DESCRIPTION_ = 'Things that render per each segment';
var b3_NAME = 'GeometryRender';
var b3_DESCRIPTION_ = 'RenderModes that involve all segments.';
var b4_NAME = 'TextRenderMode';
var b4_DESCRIPTION_ = 'Stuff that draws text';
var b5_NAME = 'CircularSegment';
var b5_DESCRIPTION_ = 'Circles and stuff';
var h0_NAME = 'linear';
var h0_DESCRIPTION_ = 'Linear movement';
var h1_NAME = 'square';
var h1_DESCRIPTION_ = 'Power of 2.';
var h2_NAME = 'sine';
var h2_DESCRIPTION_ = 'Sine ish';
var h3_NAME = 'cosine';
var h3_DESCRIPTION_ = 'cosine';
var h4_NAME = 'boost';
var h4_DESCRIPTION_ = 'half a sine';
var h5_NAME = 'random';
var h5_DESCRIPTION_ = 'random unitInterval every frame';
var h6_NAME = 'targetNoise';
var h6_DESCRIPTION_ = 'fake audio response';
var h7_NAME = 'fixed';
var h7_DESCRIPTION_ = 'fixed at 1.0';
var h8_NAME = 'fixed';
var h8_DESCRIPTION_ = 'fixed at 0.5';
var h9_NAME = 'fixed';
var h9_DESCRIPTION_ = 'fixed at 0.0';
var h10_NAME = 'EaseInOut';
var h10_DESCRIPTION_ = 'Linera eas in and out';
var j0_NAME = 'NotReverse';
var j0_DESCRIPTION_ = 'Goes forward';
var j1_NAME = 'Reverse';
var j1_DESCRIPTION_ = 'Goes reverse';
var j2_NAME = 'mode';
var j2_DESCRIPTION_ = 'abstract';
var j3_NAME = 'TwoTwoReverse';
var j3_DESCRIPTION_ = 'Goes twice forward then twice in reverse';
var j4_NAME = 'RandomReverse';
var j4_DESCRIPTION_ = 'Might go forward, might go backwards';
var i0_NAME = 'single';
var i0_DESCRIPTION_ = 'only draw template once';
var i1_NAME = 'EvenlySpaced';
var i1_DESCRIPTION_ = 'Render things evenly spaced';
var i2_NAME = 'EvenlySpacedWithZero';
var i2_DESCRIPTION_ = 'Render things evenly spaced with a fixed one at the begining and end';
var i3_NAME = 'ExpoSpaced';
var i3_DESCRIPTION_ = 'RenderMultiples but make em go faster';
var i4_NAME = 'TwoFull';
var i4_DESCRIPTION_ = 'Render twice in opposite directions';
var i5_NAME = 'TwoFull';
var i5_DESCRIPTION_ = 'Render twice in opposite directions';
var u0_NAME = 'Disabler';
var u0_DESCRIPTION_ = 'Never render';
var u1_NAME = 'loop';
var u1_DESCRIPTION_ = 'always render';
var u2_NAME = 'Triggerable';
var u2_DESCRIPTION_ = 'only render if triggered';
var u3_NAME = 'Triggerable';
var u3_DESCRIPTION_ = 'only render if triggered';
var u4_NAME = 'SweepingEnabler';
var u4_DESCRIPTION_ = 'render per geometry from left to right';
var u5_NAME = 'SwoopingEnabler';
var u5_DESCRIPTION_ = 'render per geometry from right to left';
var u6_NAME = 'RandomEnabler';
var u6_DESCRIPTION_ = 'Maybe render';
var keyMap = new Array(255);
keyMap[44] = {key:",", type:"1", name:"showTags", cmd:"tools tags", max:"-42", desc:"showTags of all groups"};
keyMap[45] = {key:"-", type:"0", name:"decrease", cmd:"nope", max:"-42", desc:"Decrease value of selectedKey."};
keyMap[46] = {key:".", type:"2", name:"snapping", cmd:"tools snap", max:"255", desc:"enable/disable snapping or set the snapping distance"};
keyMap[47] = {key:"/", type:"1", name:"showLines", cmd:"tools lines", max:"-42", desc:"Showlines of all geometry."};
keyMap[60] = {key:"<", type:"3", name:"sequencer", cmd:"seq select", max:"16", desc:"select sequencer steps to add or remove templates"};
keyMap[61] = {key:"=", type:"0", name:"increase", cmd:"nope", max:"-42", desc:"Increase value of selectedKey."};
keyMap[62] = {key:">", type:"1", name:"play", cmd:"seq play", max:"-42", desc:"toggle auto loops and sequencer"};
keyMap[63] = {key:"?", type:"0", name:"???", cmd:"fl random", max:"-42", desc:"~:)"};
keyMap[65] = {key:"A", type:"0", name:"selectAll", cmd:"??set*??", max:"-42", desc:"Select ALL the templates."};
keyMap[66] = {key:"B", type:"0", name:"add", cmd:"tp add $", max:"-42", desc:"Toggle second template on all geometry with first template."};
keyMap[67] = {key:"C", type:"0", name:"copy", cmd:"tp copy $", max:"-42", desc:"Copy first selected template into second selected."};
keyMap[68] = {key:"D", type:"3", name:"customShape", cmd:"tp shape $", max:"1000", desc:"Set a template's customShape."};
keyMap[73] = {key:"I", type:"1", name:"revMouseX", cmd:"tools revx", max:"-42", desc:"Reverse the X axis of mouse, trust me its handy."};
keyMap[77] = {key:"M", type:"0", name:"mask", cmd:"layer mask", max:"-42", desc:"Generate mask for maskLayer, or set mask."};
keyMap[79] = {key:"O", type:"6", name:"open", cmd:"fl open", max:"-42", desc:"Open stuff"};
keyMap[82] = {key:"R", type:"0", name:"reset", cmd:"tp reset $", max:"-42", desc:"Reset template."};
keyMap[83] = {key:"S", type:"0", name:"save", cmd:"fl save", max:"-42", desc:"Save stuff."};
keyMap[86] = {key:"V", type:"0", name:"paste", cmd:"tp paste $", max:"-42", desc:"Paste copied template into selected template."};
keyMap[88] = {key:"X", type:"0", name:"swap", cmd:"tp swap $", max:"-42", desc:"Completely swap template tag, with `AB` A becomes B and B becomes A."};
keyMap[91] = {key:"[", type:"2", name:"fixedAngle", cmd:"tools angle", max:"360", desc:"enable/disable fixed angles for the mouse"};
keyMap[93] = {key:"]", type:"2", name:"fixedLength", cmd:"tools ruler", max:"5000", desc:"enable/disable fixed length for the mouse"};
keyMap[94] = {key:"^", type:"0", name:"clear", cmd:"seq clear $", max:"-42", desc:"clear sequencer"};
keyMap[97] = {key:"a", type:"5", name:"animation", cmd:"tw $ a", max:"10", desc:"animate stuff"};
keyMap[98] = {key:"b", type:"5", name:"renderMode", cmd:"tw $ b", max:"6", desc:"picks the renderMode"};
keyMap[99] = {key:"c", type:"0", name:"placeCenter", cmd:"geom center", max:"-42", desc:"Place the center of geometry on next left click, right click uncenters the geometry, middle click sets scene center."};
keyMap[100] = {key:"d", type:"0", name:"breakline", cmd:"geom breakline", max:"-42", desc:"Detach line to new starting position."};
keyMap[101] = {key:"e", type:"5", name:"enterpolator", cmd:"tw $ e", max:"10", desc:"Enterpolator picks a position along a segment"};
keyMap[102] = {key:"f", type:"5", name:"fill", cmd:"tw $ f", max:"31", desc:"Pick fill color"};
keyMap[103] = {key:"g", type:"2", name:"grid", cmd:"tools grid", max:"255", desc:"use snappable grid"};
keyMap[104] = {key:"h", type:"5", name:"easing", cmd:"tw $ h", max:"11", desc:"Set the easing mode."};
keyMap[105] = {key:"i", type:"5", name:"iteration", cmd:"tw $ i", max:"6", desc:"Iterate animation in different ways, `r` sets the amount."};
keyMap[106] = {key:"j", type:"5", name:"reverse", cmd:"tw $ j", max:"5", desc:"Pick different reverse modes"};
keyMap[107] = {key:"k", type:"4", name:"strokeAlpha", cmd:"tw $ k", max:"256", desc:"Alpha value of stroke."};
keyMap[108] = {key:"l", type:"4", name:"fillAlpha", cmd:"tw $ l", max:"256", desc:"Alpha value of fill."};
keyMap[109] = {key:"m", type:"3", name:"miscValue", cmd:"tw $ m", max:"1000", desc:"A extra value that can be used by modes."};
keyMap[110] = {key:"n", type:"0", name:"new", cmd:"geom new", max:"-42", desc:"make a new geometry group"};
keyMap[111] = {key:"o", type:"5", name:"rotation", cmd:"tw $ o", max:"12", desc:"Rotate stuff."};
keyMap[112] = {key:"p", type:"3", name:"layer", cmd:"tw $ p", max:"3", desc:"Pick which layer to render on."};
keyMap[113] = {key:"q", type:"5", name:"strokeColor", cmd:"tw $ q", max:"31", desc:"Pick the stroke Color."};
keyMap[114] = {key:"r", type:"3", name:"polka", cmd:"tw $ r", max:"10000000", desc:"Number of iterations for the iterator, related to `i`."};
keyMap[115] = {key:"s", type:"3", name:"size", cmd:"tw $ s", max:"5000", desc:"Sets the brush size for `b-0`"};
keyMap[116] = {key:"t", type:"0", name:"tap", cmd:"seq tap", max:"1000", desc:"Tap tempo, tweaking nudges time."};
keyMap[117] = {key:"u", type:"5", name:"enabler", cmd:"tw $ u", max:"7", desc:"Enablers decide if a render happens or not."};
keyMap[118] = {key:"v", type:"5", name:"segSelect", cmd:"tw $ v", max:"7", desc:"Picks which segments get rendered."};
keyMap[119] = {key:"w", type:"3", name:"strokeWeight", cmd:"tw $ w", max:"420", desc:"Stroke weight."};
keyMap[120] = {key:"x", type:"3", name:"beatMultiplier", cmd:"tw $ x", max:"5000", desc:"Set how many beats the animation will take."};
keyMap[121] = {key:"y", type:"4", name:"tracers", cmd:"post tracers", max:"256", desc:"Set tracer level for tracer layer."};
keyMap[124] = {key:"|", type:"1", name:"enterText", cmd:"text", max:"-42", desc:"enable text entry, type text and press return"};
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var FULLSCREEN = false;
var OSC_IN_PORT = 6667;
var OSC_OUT_PORT = 6668;
var OSC_OUT_IP = '127.0.0.1';
var WEBSOCKET_PORT = 8025;
var CURSOR_SIZE = 18;
var CURSOR_GAP_SIZE = 6;
var CURSOR_STROKE_WIDTH = 3;
var GUI_TIMEOUT = 1000;
var NODE_STROKE_WEIGTH = 5;
var NODE_COLOR = -1;
var PREVIEW_LINE_STROKE_WIDTH = 1;
var PREVIEW_LINE_COLOR = -1;
var CURSOR_COLOR = -1;
var SNAPPED_CURSOR_COLOR = -16726016;
var TEXT_COLOR = -1;
var GRID_COLOR = -6908266;
var SEGMENT_COLOR = -4276546;
var SEGMENT_COLOR_UNSELECTED = -9539986;
var BW_BEAMER = false;
var DUAL_HEAD = false;
var INVERTED_COLOR = false;
var BACKGROUND_COLOR = -16777216;
var STROKE_CAP = 2;
var STROKE_JOIN = 8;
var BRUSH_SCALING = false;
var DEFAULT_TEMPO = 1300;
var SEQ_STEP_COUNT = 16;
var RENDERING_PIPELINE = 1;
var EXPERIMENTAL = false;
var DEFAULT_GRID_SIZE = 64;
var DEFAULT_LINE_ANGLE = 30;
var DEFAULT_LINE_LENGTH = 128;
var MOUSE_DEBOUNCE = 100;
var SCROLLWHEEL_SELECTOR = true;
var MAKE_DOCUMENTATION = true;
var PALLETTE_COUNT = 12;
var LED_SERIAL_PORT = '/dev/ttyACM0';
var LED_SYSTEM = 1;
