package com.enonic.devops.app.havoc;

import java.util.LinkedList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.enonic.xp.script.bean.BeanContext;
import com.enonic.xp.script.bean.ScriptBean;

public class HavocBean
    implements ScriptBean
{
    private static LinkedList<String> buff = new LinkedList<>();

    private Logger LOG = LoggerFactory.getLogger( HavocBean.class );

    @Override
    public void initialize( final BeanContext context )
    {

    }

    public void wreckGC( final GCHavocParams params )
        throws InterruptedException
    {
        System.out.println( "Wreaking GC-havoc" );

        long start = System.currentTimeMillis();

        Thread thread = new Thread( () -> {
            double sideEffect = 0;
            while ( System.currentTimeMillis() - start < params.getRunTime() )
            {
                sideEffect = slowpoke( params.getIterations() );
            }
            System.out.println( "result = " + sideEffect );
        } );
        thread.start();

        new Thread( () -> {
            long timestamp = System.currentTimeMillis();
            while ( System.currentTimeMillis() - start < ( params.getRunTime() ) )
            {
                try
                {
                    Thread.sleep( 1000 );
                }
                catch ( InterruptedException e )
                {
                    e.printStackTrace();
                }
                System.out.println( "Delay " + ( System.currentTimeMillis() - timestamp ) );
                timestamp = System.currentTimeMillis();
                //trigger stop-the-world
                System.gc();
            }
        } ).start();
    }

    public static double slowpoke( long iterations )
    {
        double d = 0;
        for ( int j = 1; j < iterations; j++ )
        {
            d += Math.log( Math.E * j );
            buff.add(
                "testqe4e4thswestqe4thhawe4thswrtht4haw4ethawe4thswrthtestqe4thwrethwsthswet4hwst4hwsht4swhrtwht4wst4haw4ethawe4thswrth" );
        }
        return d;
    }


}
