<?xml version="1.0" encoding="UTF-8"?>
<configuration>
<system.webServer>
<rewrite>
<rules>
    <rule name="extensionless" stopProcessing="true">
          <match url="(.*)\.html$" />
          <action type="Redirect" url="{R:1}" redirectType="Permanent" />
    </rule>
    <rule name="removeextension" enabled="true">
        <match url=".*" negate="false" />
            <conditions>
                <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                <add input="{URL}" pattern="(.*)\.(.*)" negate="true" />
            </conditions>
            <action type="Rewrite" url="{R:0}.html" />
    </rule>
</rules>
</rewrite>
</system.webServer>
</configuration>
