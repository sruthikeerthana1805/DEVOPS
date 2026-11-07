package demo;

import com.intuit.karate.junit5.Karate;

class ApiTest {
    @Karate.Test
    Karate testApi() {
        return Karate.run("api").relativeTo(getClass());
    }
}
