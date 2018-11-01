package com.enonic.devops.app.havoc;

public class GCHavocParams
{
    private long runTime = 60000;

    private long iterations = 1000;

    public long getRunTime()
    {
        return runTime;
    }

    public void setRunTime( final long runTime )
    {
        this.runTime = runTime;
    }

    public long getIterations()
    {
        return iterations;
    }

    public void setIterations( final long iterations )
    {
        this.iterations = iterations;
    }
}
