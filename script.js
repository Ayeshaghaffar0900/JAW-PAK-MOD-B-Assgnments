let a = 5;
// question 1

let exp1 = ((4 + 5 && "abc") || false + "test") * (a-- || --a) || (false && ++a + 1) * "end";
console.log(`exp1 answer is: ${exp1}`);

// question 2

a = 5;

let exp2 = (10 * (("foo" && 5 + ++a) || "bar") && false + "test") || (0 && true);
console.log(`exp2 answer is: ${exp2}`);

// question 3

a = 5;

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
console.log(`exp3 answer is: ${exp3}`);

// question 4

a = 5;

let exp4 = "hello" * (++a + true) || ((2 + 3 * "abc") * (0 + 1) + "xyz" && 0);
console.log(`exp4 answer is: ${exp4}`);

// question 5

a = 5;

let exp5 = true || ((0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
console.log(`exp5 answer is: ${exp5}`);

// question 6

a = 5;

let exp6 = (++a + "abc" && 4 * 2 + 3) || (0 + 1 && 3 * "hello") || a--;
console.log(`exp6 answer is: ${exp6}`);

// question 7

a = 5;

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
console.log(`exp7 answer is: ${exp7}`);

// question 8

a = 5;

let exp8 = (0 + 1 && true + 0) || ((false + "test") * 4 && 3 + 2) || "value";
console.log(`exp8 answer is: ${exp8}`);

// question 9

a = 5;

let exp9 = 3 * "abc" + (true + 1) || (++a + "test" && 3 + "result") || null;
console.log(`exp9 answer is: ${exp9}`); 

// question 10

a = 5;

let exp10 = (++a + false && "start") || (0 + 1 && "value") || (5 * "end" && a++);
console.log(`exp10 answer is: ${exp10}`);

// question 11

a = 5;

let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || (5 * "abc" && 0);
console.log(`exp11 answer is: ${exp11}`);

// question 12

a = 5;

let exp12 = "hello" * (true + 0) + 2 || ((false + 1) * 3 && "result") || 4 + "test";
console.log(`exp12 answer is: ${exp12}`);

// question 13

a = 5;

let exp13 = (5 * (a++ || false) + 2 && false + "test") || (3 * "end" && 4);
console.log(`exp13 answer is: ${exp13}`);

// question 14

a = 5;

let exp14 = (false + "abc") * 2 || ((--a + 1) * "start" + 3 && 4) || "end";
console.log(`exp14 answer is: ${exp14}`);

// question 15

a = 5;

let exp15 = (0 + "foo") * 3 + (true && "result") || "start"; +(++a + 1) * 4;
console.log(`exp15 answer is: ${exp15}`);

// question 16

a = 5;

let exp16 = 2 * "end" || (false && true) || ("start" + (--a + 2) * 5 && null);
console.log(`exp16 answer is: ${exp16}`);

// question 17

a = 5;

let exp17 = (3 + 2 * ("test" + a--) && (false + 3) * 5) || (0 + "value" && 4);
console.log(`exp17 answer is: ${exp17}`);

// question 18

a = 5;

let exp18 = ("start" && (false || 2 * "end")) || ((++a + 1) * 3 + "result" && 0);
console.log(`exp18 answer is: ${exp18}`);

// question 19

a = 5;

let exp19 = (5 + 1 && "foot") || ((++a + 2) * (false + 3) + "test" && 7);
console.log(`exp19 answer is: ${exp19}`);

// question 20

a = 5;

let exp20 = (2 * 3 + "hello" && (false + ++a) * "result") || "end" + 5 || 0;
console.log(`exp20 answer is: ${exp20}`);

// question 21

a = 5;

let exp21 = (5 * (true + ++a) && "test" + false) || 7 * (true + 2) + "value";
console.log(`exp21 answer is: ${exp21}`);

// question 22

a = 5;

let exp22 = ("foo" + 4 && (++a + 1) * "start") || (5 + 6 * (false + true) && "test");
console.log(`exp22 answer is: ${exp22}`);

// question 23

a = 5;

let exp23 = (false && 2) || ((a++ + 1) * "end" && "start") || (4 * 5 && "result");
console.log(`exp23 answer is: ${exp23}`);

// question 24

a = 5;

let exp24 = 3 + 2 * "test" || ((false + a--) * "hello" && "world" + 1) || 2;
console.log(`exp24 answer is: ${exp24}`);

// question 25

a = 5;

let exp25 = ((3 + 4) * (false || a--) && 5) || ("start" + 1 + "test" && 0);
console.log(`exp25 answer is: ${exp25}`);

// question 26

a = 5;

let exp26 = ("hello" && 3 * 2 + (a++ + 1)) || (false + true) * "result" + "end";
console.log(`exp26 answer is: ${exp26}`);

// question 27

a = 5;

let exp27 = (3 * "test" + (true + 2) && (false || "value")) || "start" + a++;
console.log(`exp27 answer is: ${exp27}`);

// question 28

a = 5;

let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
console.log(`exp28 answer is: ${exp28}`);

// question 29

a = 5;

let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
console.log(`exp29 answer is: ${exp29}`);

// question 30

a = 5;

let exp30 = (true + 3) * "test" || (1 * 5 && false + "value" + "end") || a--;
console.log(`exp30 answer is: ${exp30}`);

// Question 31
a = 5;

let exp31 = 3 + "end" || (2 * "test" && ++a + true) || "start" + 1;
console.log(`exp31 answer is: ${exp31}`);

// Question 32
a = 5;

let exp32 = (0 + 3) * (true + false) || (5 * "hello" + 2 && false + "test");
console.log(`exp32 answer is: ${exp32}`);

// Question 33
a = 5;

let exp33 = (2 + 3 && "end" + a++) || ((false + "test") * 4 && 5);
console.log(`exp33 answer is: ${exp33}`);

// Question 34
a = 5;

let exp34 = "hello" + 4 * (false + a--) || (3 && "start" + 1) || true + "test";
console.log(`exp34 answer is: ${exp34}`);

// Question 35
a = 5;

let exp35 = ("start" && (a-- || "test") * 4 + 5 && false + "end") || 2;
console.log(`exp35 answer is: ${exp35}`);

// Question 36
a = 5;

let exp36 = (1 + "value" && ++a + 2) || ((3 + "result") * true && 4);
console.log(`exp36 answer is: ${exp36}`);

// Question 37
a = 5;

let exp37 = ("hello" && 2 + "test") || (++a + 3 && true + "value" + 1);
console.log(`exp37 answer is: ${exp37}`);

// Question 38
a = 5;

let exp38 = (5 * (a-- || "test") && 6 * "result") || 2 + "end";
console.log(`exp38 answer is: ${exp38}`);

// Question 39
a = 5;

let exp39 = ("start" && (false + 1) * 2) || (3 + 4 * "hello" + 5 && 0);
console.log(`exp39 answer is: ${exp39}`);

// Question 40
a = 5;

let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
console.log(`exp40 answer is: ${exp40}`);

// Question 41
 a = 5;

let exp41 = ("start" && (3 + 2) * "test" + 5) || (4 * (false + 1) && "hello");
console.log(`exp41 answer is: ${exp41}`);

// Question 42
a = 5;

let exp42 = 1 + 2 * "end" || (false + 3 && "result" * 4 + a--);
console.log(`exp42 answer is: ${exp42}`);

// Question 43
a = 5;

let exp43 = (false && a--) || (4 * (3 + 2) && "start" + 5);
console.log(`exp43 answer is: ${exp43}`);

// Question 44
a = 5;

let exp44 = (3 + 2 * (true + 5) && "value" + 1) || ++a + 2 + "test";
console.log(`exp44 answer is: ${exp44}`);

// Question 45
a = 5;

let exp45 = ((false || 1) + "test" && 5 + 3 * a--) || "end" + 2;
console.log(`exp45 answer is: ${exp45}`);

// Question 46
a = 5;

let exp46 = (2 * a-- + 4 && "test") || (3 + "hello" && (false + 1) * 5);
console.log(`exp46 answer is: ${exp46}`);

// Question 47
a = 5;

let exp47 = (0 + "result" && (3 + 1) * 2) || (false + a--) * "end";
console.log(`exp47 answer is: ${exp47}`);

// Question 48
a = 5;

let exp48 = ((false || 1) * "test" && 4) || (true + 2) * "hello" + a--;
console.log(`exp48 answer is: ${exp48}`);

// Question 49
a = 5;

let exp49 = (2 * 3 + "result" && 4 * (a-- + 1)) || "start" + 2 + "end";
console.log(`exp49 answer is: ${exp49}`);

// Question 50
a = 5;

let exp50 = (32 && true - ++a && " ") || "true";
console.log(`exp50 answer is: ${exp50}`);

// Question 51
a = 5;

let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
console.log(`exp51 answer is: ${exp51}`);

// Question 52
a = 5;

let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
console.log(`exp52 answer is: ${exp52}`);

// Question 53
a = 5;

let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
console.log(`exp53 answer is: ${exp53}`);

// Question 54
a = 5;

let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
console.log(`exp54 answer is: ${exp54}`);

// Question 55
a = 5;

let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
console.log(`exp55 answer is: ${exp55}`);

// Question 56
a = 5;

let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
console.log(`exp56 answer is: ${exp56}`);

// Question 57
a = 5;

let exp57 = 3 * "test" + 1 || (++a && a--) * "result" || "value";
console.log(`exp57 answer is: ${exp57}`);

// Question 58
a = 5;

let exp58 = (a-- + "start") * "result" || false + 2 + "end" + 3;
console.log(`exp58 answer is: ${exp58}`);

// Question 59
a = 5;

let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
console.log(`exp59 answer is: ${exp59}`);

// Question 60
a = 5;

let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
console.log(`exp60 answer is: ${exp60}`);

// Question 61
a = 5;

let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
console.log(`exp61 answer is: ${exp61}`);

// Question 62
a = 5;

let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
console.log(`exp62 answer is: ${exp62}`);

// Question 63
a = 5;

let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
console.log(`exp63 answer is: ${exp63}`);

// Question 64
a = 5;

let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
console.log(`exp64 answer is: ${exp64}`);

// Question 65
a = 5;

let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
console.log(`exp65 answer is: ${exp65}`);

// Question 66
a = 5;

let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
console.log(`exp66 answer is: ${exp66}`);

// Question 67
a = 5;

let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
console.log(`exp67 answer is: ${exp67}`);

// Question 68
a = 5;

let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
console.log(`exp68 answer is: ${exp68}`);

// Question 69
a = 5;

let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
console.log(`exp69 answer is: ${exp69}`);

// Question 70
a = 5;

let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
console.log(`exp70 answer is: ${exp70}`);

// Question 71
a = 5;

let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
console.log(`exp71 answer is: ${exp71}`);

// Question 72
a = 5;

let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
console.log(`exp72 answer is: ${exp72}`);

// Question 73
a = 5;

let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
console.log(`exp73 answer is: ${exp73}`);

// Question 74
a = 5;

let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
console.log(`exp74 answer is: ${exp74}`);

// Question 75
a = 5;

let exp75 = 3 * "test" + (a-- + "start") || (false + 1) * "result";
console.log(`exp75 answer is: ${exp75}`);
