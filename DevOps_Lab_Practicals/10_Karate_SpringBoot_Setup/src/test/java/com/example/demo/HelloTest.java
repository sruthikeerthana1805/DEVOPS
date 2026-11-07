package com.example.demo;

import com.intuit.karate.junit5.Karate;

class HelloTest {
    @Karate.Test
    Karate testHello() {
        return Karate.run("hello").relativeTo(getClass());
    }
}
